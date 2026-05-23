export interface Letter {
  id: string;
  date: string;
  oneLiner: string;
  title: string;
  sender: string;
  /** 打开信封后跳转到外部 H5（如 companion-520） */
  href?: string;
  /** 无 href 时在弹窗内阅读的正文 */
  content?: string;
}

export interface Box {
  id: string;
  title: string;
  label: string;
  color: string;
  description: string;
  isOpenable: boolean;
}
