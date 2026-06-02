import { useEffect } from 'react';
import { applyDocumentTitle, getLetter520EmbedSrc, getPageTitle } from '@/shared/config/siteConfig';

export function Letter520Embed() {
  useEffect(() => {
    applyDocumentTitle(getPageTitle('letter-520'));
  }, []);

  return (
    <div className="fixed inset-0 z-[60] bg-[#1a1218]" id="letter-520-embed">
      <iframe
        title="2026.05.20 互动信"
        src={getLetter520EmbedSrc()}
        className="w-full h-full border-0"
        allow="autoplay"
      />
    </div>
  );
}
