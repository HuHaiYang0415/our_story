/**
 * 场景背景图路径（images/ 目录）
 */
const SCENE_BG = {
  road: 'images/bg-road-fog.png',
  restaurantDusk: 'images/bg-restaurant-dusk.png',
  restaurantMoon: 'images/bg-restaurant-moon.png',
  riverNightCrowd: 'images/bg-riverside-night-crowd.png',
  riverNightEmpty: 'images/bg-riverside-night-empty.png',
};

function sceneBackground(src, className, contentHtml) {
  return `
    <div class="scene-layer active scene-has-bg ${className}">
      <img class="scene-bg-img" src="${src}" alt="">
      <div class="scene-bg-shade"></div>
      ${contentHtml ? `<div class="scene-content">${contentHtml}</div>` : ''}
    </div>`;
}
