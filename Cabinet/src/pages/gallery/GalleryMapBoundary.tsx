import { Component } from 'react';
import type { ReactNode } from 'react';

export class GalleryMapBoundary extends Component<{ children: ReactNode; onRetry: () => void; onBack: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return <section className="gallery-empty"><div className="gallery-empty-paper"><h2>地图暂时没有展开</h2><p>资源加载失败，照片仍可在邮册里查看。</p><div className="gallery-note-actions" data-gallery-control><button type="button" onClick={this.props.onRetry}>重新加载地图</button><button type="button" onClick={this.props.onBack}>回到邮册</button></div></div></section>;
  }
}
