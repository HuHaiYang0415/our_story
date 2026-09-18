"""Import confirmed collections; publishing requires explicit --publish approval.

Outputs are mechanical snapshots: 400px quality-60 EXIF-free thumbnails,
repository metadata and a private allowlist. --publish additionally creates
approved static originals at the site root, not a second public/ copy.
The source directory is read-only throughout.
"""
import argparse
import hashlib
import json
import struct
import shutil
from pathlib import Path
from urllib.parse import quote

from PIL import Image, ImageOps

COLLECTIONS = (
    ('disney', '迪士尼', '2026-09-13', '上海迪士尼', '1000013716.jpg', '上海', '上海'),
    ('confession', '告白', '2026-06-26', '青田温溪镇温中路81号', '2026-06-26.jpg', '浙江', '丽水'),
    ('festivals', '节日', None, '丽水市莲都区南明山街道丽沙小区', '七夕.jpg', '浙江', '丽水'),
    ('lingyin', '灵隐寺', '2026-03-14', '杭州灵隐寺', '2026-03-14.jpg', '浙江', '杭州'),
    ('daily', '日常', None, '丽水市莲都区南明山街道丽沙小区', '1000013424.jpg', '浙江', '丽水'),
)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source-root', required=True, type=Path)
    parser.add_argument('--publish', action='store_true', help='Publish the confirmed five collections and addresses, only after user approval')
    args = parser.parse_args()
    cabinet = Path(__file__).resolve().parent.parent
    source_root = args.source_root.resolve(strict=True)
    albums, assets, registry = [], [], []
    original_bytes = thumb_bytes = 0
    # Validate every cover before producing anything.
    for _, title, _, _, cover, _, _ in COLLECTIONS:
        if not (source_root / title / cover).is_file():
            raise ValueError(f'Missing cover: {title}/{cover}')
    for sort_order, (slug, title, date, location, cover, province, city) in enumerate(COLLECTIONS):
        ids = []
        cover_id = None
        for source in sorted((source_root / title).iterdir(), key=lambda p: p.name):
            if not source.is_file() or source.suffix.lower() not in ('.jpg', '.jpeg'):
                continue
            resolved = source.resolve(strict=True)
            if not resolved.is_relative_to(source_root):
                raise ValueError('Source escapes approved directory')
            media_id = f'photo-{slug}-{source.stem}'
            ids.append(media_id)
            if source.name == cover:
                cover_id = media_id
            destination = cabinet / 'public/gallery/collections' / slug / source.name
            destination.parent.mkdir(parents=True, exist_ok=True)
            with Image.open(source) as opened:
                oriented = ImageOps.exif_transpose(opened)
                width, height = oriented.size
                thumb = oriented.convert('RGB')
                thumb.thumbnail((400, 400), Image.Resampling.LANCZOS)
                thumb.save(destination, 'JPEG', quality=60, progressive=True, optimize=True, exif=b'')
            origin = b'impeccable:prompt\0Origin: user-provided local photograph; compressed 400px quality-60 thumbnail, no AI generation. Original remains unchanged outside the repository. Local import is not public-release authorization.'
            encoded = destination.read_bytes()
            destination.write_bytes(encoded[:2] + b'\xff\xfe' + struct.pack('>H', len(origin) + 2) + origin + encoded[2:])
            with Image.open(destination) as check:
                if check.getexif() or max(check.size) > 400:
                    raise ValueError(f'Invalid thumbnail: {destination}')
            original_bytes += source.stat().st_size
            thumb_bytes += destination.stat().st_size
            assets.append(dict(id=media_id, slug=slug, fileName=quote(source.name), width=width, height=height, alt=f'{title}照片'))
            with source.open('rb') as original:
                digest = hashlib.file_digest(original, 'sha256').hexdigest()
            registry.append(dict(id=media_id, sourceRelativePath=source.relative_to(source_root).as_posix(), bytes=source.stat().st_size, sha256=digest))
            if args.publish:
                # One canonical tracked copy, at the site root; avoid duplicating 753 MiB in public/.
                public_original = cabinet.parent / 'gallery/originals' / slug / source.name
                public_original.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(source, public_original)
                public_original.with_name(public_original.name + '.json').write_text(json.dumps({
                    'prompt': 'Origin: user-provided photograph. User explicitly approved publication of five collections and addresses on 2026-09-18. Original bytes unchanged; no AI generation.',
                    'sha256': digest,
                    'bytes': source.stat().st_size,
                    'publicationAuthority': 'SCOPE.md',
                }, ensure_ascii=False, indent=2), encoding='utf-8')
        album = dict(id=f'album-{slug}', spaceId='local-our-story', sortOrder=sort_order, visibility='public', title=title,
                     location=location, coverMediaAssetId=cover_id, mediaAssetIds=ids,
                     mapPoint=dict(x=0, y=0, label=province, city=city, precision='city'))
        if date:
            album.update(startDate=date, endDate=date, datePrecision='day')
        albums.append(album)
    dump = lambda value: json.dumps(value, ensure_ascii=False, indent=2)
    metadata = """// Generated by scripts/import-gallery-collections.py. %s
import { resolvePublicAssetUrl } from '@/shared/config/siteConfig';
import type { Album, MediaAsset } from '@/domain/content';

const LOCAL_ASSETS = %s;
export const GALLERY_MEDIA_ASSETS: readonly MediaAsset[] = Object.freeze(LOCAL_ASSETS.map(item => {
  const thumb = resolvePublicAssetUrl(`gallery/collections/${item.slug}/${item.fileName}`);
  return Object.freeze({ id: item.id, spaceId: 'local-our-story', kind: 'image' as const,
    url: thumb, alt: item.alt, width: item.width, height: item.height, mimeType: 'image/jpeg',
    loadingRole: 'interaction' as const, variants: { thumb,
      original: %s } });
}));
export const GALLERY_LOCAL_ALBUMS: readonly Album[] = Object.freeze(%s as Album[]);
export const GALLERY_PUBLIC_ALBUMS: readonly Album[] = %s;
""" % ('Explicit publication approval required by SCOPE; published import.' if args.publish else 'DEV-only import; no publication approval inferred.',
       dump(assets) if args.publish else 'import.meta.env.DEV ? ' + dump(assets) + ' : []',
       'resolvePublicAssetUrl(`gallery/originals/${item.slug}/${item.fileName}`)' if args.publish else '`/__gallery-original/${encodeURIComponent(item.id)}`',
       dump(albums) if args.publish else 'import.meta.env.DEV ? ' + dump(albums) + ' : []',
       'GALLERY_LOCAL_ALBUMS' if args.publish else 'Object.freeze([])')
    (cabinet / 'src/pages/gallery/data/galleryContent.ts').write_text(metadata, encoding='utf-8')
    private_registry = cabinet.parent / '.impeccable/gallery-assets/current-originals.json'
    private_registry.parent.mkdir(parents=True, exist_ok=True)
    private_registry.write_text(dump(dict(sourceRoot=str(source_root), assets=registry)), encoding='utf-8')
    # Extend the already licensed caption font; no new artwork or font download.
    full_font = private_registry.parent / 'LongCang-Regular.ttf'
    if full_font.is_file():
        try:
            import fontTools
        except ImportError:
            print('Caption font subsetting skipped: fontTools unavailable; KaiTi fallback remains.')
            full_font = Path('__unavailable__')
    if full_font.is_file():
        from fontTools import subset
        options = subset.Options()
        options.flavor = 'woff'
        font = subset.load_font(str(full_font), options)
        subsetter = subset.Subsetter(options=options)
        subsetter.populate(text=''.join(row[1] for row in COLLECTIONS) + '0123456789张照片')
        subsetter.subset(font)
        subset.save_font(font, str(cabinet / 'src/pages/gallery/assets/gallery-hand.woff'), options)
    print(dump(dict(albums=[dict(title=a['title'], count=len(a['mediaAssetIds']), cover=a['coverMediaAssetId']) for a in albums],
                    photos=len(assets), originalBytes=original_bytes, thumbnailBytes=thumb_bytes, originalCopies=len(assets) if args.publish else 0)))


if __name__ == '__main__':
    main()
