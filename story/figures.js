/**
 * 人物 PNG — images/ 目录
 */
const CHAR_IMAGES = {
  boy: 'images/ref-boy.png',
  boyBack: 'images/boy-road-walk.png',
  boySide: 'images/boy-walk-side.png',
  girl: 'images/ref-girl.png',
};

function charImg(key, poseClass = '') {
  const src = CHAR_IMAGES[key];
  const role = key.startsWith('boy') ? 'boy' : 'girl';
  const cls = ['figure', `figure-${role}`, 'figure-img', poseClass].filter(Boolean).join(' ');
  return `<img class="${cls}" src="${src}" alt="" decoding="async" loading="lazy">`;
}

const FIGURES = {
  boy: charImg('boy'),
  boyBack: charImg('boyBack', 'pose-back'),
  boySide: charImg('boySide', 'pose-side'),
  girl: charImg('girl'),
};
