import urls from 'virtual:gallery-resource-urls';
import { resolvePublicAssetUrl } from '@/shared/config/siteConfig';
export function galleryResourceUrl(name: string) {
  const url = urls[decodeURIComponent(name)]; if (!url) throw new Error(`Unknown gallery resource: ${name}`);
  return resolvePublicAssetUrl(url);
}
