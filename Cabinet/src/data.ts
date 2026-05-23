import { Letter } from './types';

/** 每封信默认邮票路径：Cabinet/image/stamp-{信封id}.jpg */
export function getLetterStampSrc(letter: Letter): string {
  return letter.stampImage ?? `image/stamp-${letter.id}.jpg`;
}

export const LETTERS_DATA: Letter[] = [
  {
    id: 'letter-520',
    date: '2026.05.20',
    title: '散步、玫瑰与美丽的平平',
    oneLiner: '在线上完成世界上第二浪漫的事情吧',
    sender: '小胡',
    href: 'companion-520/index.html',
  },
  {
    id: 'letter-pending',
    date: '未完待续',
    title: '未来的留白',
    oneLiner: '“未来的日子里，还有更多美好的事情想写给你听。”',
    sender: '小胡',
    content: `亲爱的平平：

这里是一张空白的记忆信笺。

在未来的时光里，我们会去到更多奇妙的地方，拍下更多明媚的照片，产生更多心动的默契。
这封信正安安静静地等待着，被我们未来的柴米油盐与碎碎念填满。

敬请期待属于我们的下一章吧！

—— 充满期待的，
小胡`,
  },
];
