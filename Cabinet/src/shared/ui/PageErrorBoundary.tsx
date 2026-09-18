import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { FestiveLoadScreen } from './FestiveLoadScreen';

export interface PageErrorBoundaryProps {
  children: ReactNode;
  isNight: boolean;
  resetKey: string;
  onBack: () => void;
  onRetry: () => void;
}

type PageErrorBoundaryState = {
  hasError: boolean;
};

/** 统一兜底懒加载 chunk 与专题页运行时错误，避免错误扩散到应用壳。 */
export class PageErrorBoundary extends Component<
  PageErrorBoundaryProps,
  PageErrorBoundaryState
> {
  state: PageErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): PageErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('页面加载或运行时错误', error, info);
  }

  componentDidUpdate(previousProps: PageErrorBoundaryProps) {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <FestiveLoadScreen
          title="页面暂时无法打开"
          label="页面资源加载失败"
          progress={0}
          failed
          isNight={this.props.isNight}
          tone="amber"
          backLabel="返回展柜"
          onBack={this.props.onBack}
          onRetry={this.props.onRetry}
        />
      );
    }

    return this.props.children;
  }
}
