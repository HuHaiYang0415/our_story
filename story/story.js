/**
 * 场景配置：narrative 旁白，build 返回 stage 内 HTML，onEnter 可选动画钩子
 * 人物见 figures.js（男主/女主 PNG，亲属 SVG）
 */
const HEART_SVG = `<svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
  <path d="M50 88 C20 62 5 45 5 28 C5 14 16 5 28 5 C38 5 46 12 50 20 C54 12 62 5 72 5 C84 5 95 14 95 28 C95 45 80 62 50 88Z"/>
</svg>`;

const SCENES = [
  {
    id: 'road',
    narrative: '他独自走在一条望不到头的路上。身旁掠过熙熙攘攘的陌生人，只剩下一道道影子。',
    build() {
      return sceneBackground(
        SCENE_BG.road,
        'road-scene road-scene-launch',
        `
          <div class="boy-walk boy-walk-back" id="boy-road-actor">${FIGURES.boyBack}</div>
        `
      );
    },
    onEnter(stage) {
      const layer = stage.querySelector('.road-scene');
      const boy = stage.querySelector('#boy-road-actor');
      requestAnimationFrame(() => {
        layer?.classList.add('road-reveal');
        boy?.classList.add('rise-on-road');
      });
    },
  },
  {
    id: 'restaurant-dusk',
    narrative: '路口向左，道路一侧是一家寻常的中式小馆。透明玻璃门里灯火渐暖，黄昏正搭上檐角。',
    build() {
      return sceneBackground(SCENE_BG.restaurantDusk, 'restaurant-bg-scene');
    },
  },
  {
    id: 'restaurant-moon',
    narrative: '月亮升起来的时候，一顿饭的寒暄终于安静落下。散席之后，该只有两个人，去走一段只属于彼此的路。',
    build() {
      return sceneBackground(SCENE_BG.restaurantMoon, 'restaurant-bg-scene');
    },
  },
  {
    id: 'river-pov',
    narrative: '饭后，他们走到江滨。夜色里还有不少路人。视角缓缓拉开——陌生人一个个淡去，只剩下彼此。',
    build() {
      return `
        <div class="scene-layer active scene-has-bg river-bg-scene" id="river-layer">
          <img class="scene-bg-img river-bg-crowd" src="${SCENE_BG.riverNightCrowd}" alt="">
          <img class="scene-bg-img river-bg-empty" id="river-bg-empty" src="${SCENE_BG.riverNightEmpty}" alt="">
          <div class="scene-bg-shade"></div>
          <div class="scene-content">
            <div class="couple-walk couple-on-river couple-walk-ltr" id="couple-far">
              ${FIGURES.boySide}${FIGURES.girl}
            </div>
          </div>
        </div>`;
    },
    onEnter(stage) {
      setTimeout(() => stage.classList.add('river-fade-empty'), 1200);
      setTimeout(() => {
        const c = stage.querySelector('#couple-far');
        if (c) c.classList.add('show');
      }, 1600);
    },
  },
  {
    id: 'glance',
    narrative: '她侧过头，看了他一眼。那一刻，他心里落下一颗小小的种子。',
    build() {
      return sceneBackground(
        SCENE_BG.riverNightEmpty,
        'river-bg-scene',
        `
          <div class="couple-walk couple-on-river couple-walk-ltr girl-glance show">
            ${FIGURES.boySide}
            <div class="girl-wrap">${FIGURES.girl}
              <span class="seed-heart" id="seed-heart">${HEART_SVG}</span>
            </div>
          </div>
        `
      );
    },
    onEnter(stage) {
      setTimeout(() => stage.querySelector('#seed-heart')?.classList.add('show'), 800);
    },
  },
  {
    id: 'farewell',
    narrative: '他们道别。生活拉开两条线，各自忙碌，只在手机里，偶尔亮起一句问候。',
    build() {
      return `
        <div class="scene-layer active split-scene">
          <div class="split-wrap">
            <div class="split-pane">
              <span class="split-label">他</span>
              <div class="desk-icon">班</div>
            </div>
            <div class="split-pane">
              <span class="split-label">她</span>
              <div class="desk-icon">班</div>
            </div>
          </div>
        </div>`;
    },
  },
  {
    id: 'chat-fill',
    narrative: '聊得不多，却足够。她在他的心里，慢慢填满。',
    build() {
      return `
        <div class="scene-layer active split-scene">
          <div class="split-wrap">
            <div class="split-pane">
              <span class="split-label">他</span>
              <div class="phone-mini">信</div>
            </div>
            <div class="split-pane">
              <span class="split-label">她</span>
              <div class="phone-mini">信</div>
            </div>
          </div>
          <div class="heart-fill-wrap">
            <div class="heart-level" id="heart-level">${HEART_SVG}</div>
          </div>
        </div>`;
    },
    onEnter(stage) {
      setTimeout(() => stage.querySelector('#heart-level')?.classList.add('fill'), 600);
    },
  },
  {
    id: 'accident-phone',
    narrative: '直到那一天，她的消息一条接一条地跳出来……',
    build() {
      return `
        <div class="scene-layer active phone-scene">
          <div class="phone-frame" id="phone-accident">
            <div class="phone-notch"></div>
            <div class="chat-header">她</div>
            <div class="chat-body" id="accident-chat"></div>
          </div>
        </div>`;
    },
    onEnter(stage) {
      const phone = stage.querySelector('#phone-accident');
      const chat = stage.querySelector('#accident-chat');
      const messages = [
        { type: 'her', text: '刚才路上好滑……', delay: 400 },
        { type: 'her', text: '我被后面的电动车撞了一下', delay: 1200 },
        { type: 'her', text: '现在在医院', delay: 2200 },
        { type: 'her', text: '我躺病床上呢，你别担心', delay: 3200 },
        { type: 'system', text: '—— 他盯着屏幕，手指发凉 ——', delay: 4200 },
        { type: 'his', text: '我马上过来', delay: 5200 },
      ];
      setTimeout(() => phone?.classList.add('zoom'), 200);
      messages.forEach((m) => {
        setTimeout(() => {
          const b = document.createElement('div');
          b.className = `bubble ${m.type}`;
          b.textContent = m.text;
          chat?.appendChild(b);
          requestAnimationFrame(() => b.classList.add('show'));
          chat?.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' });
        }, m.delay);
      });
    },
    autoAdvance: 7500,
  },
  {
    id: 'hospital',
    narrative: '他赶到医院。她躺在病床上。他走过去，轻轻牵起她的手。',
    build() {
      return `
        <div class="scene-layer active bed-scene">
          <div class="bed">
            <div class="girl-bed">${FIGURES.girl}</div>
            <div class="bed-frame"></div>
            <div class="bed-mattress"></div>
          </div>
          <div class="boy-walk-to-bed" id="boy-to-bed">${FIGURES.boy}</div>
          <p class="hands-hold" id="hands-hospital">牵手</p>
        </div>`;
    },
    onEnter(stage) {
      setTimeout(() => stage.querySelector('#boy-to-bed')?.classList.add('arrived'), 300);
      setTimeout(() => stage.querySelector('#hands-hospital')?.classList.add('show'), 2200);
    },
    autoAdvance: 5500,
  },
  {
    id: 'home',
    narrative: '她回家休养。他又来探望，坐在床边，还是那样牵着她的手。',
    build() {
      return `
        <div class="scene-layer active bed-scene warm">
          <div class="bed">
            <div class="girl-bed">${FIGURES.girl}</div>
            <div class="bed-frame"></div>
            <div class="bed-mattress"></div>
          </div>
          <p class="hands-hold show" style="opacity:1">牵手</p>
        </div>`;
    },
  },
  {
    id: 'brace-walk',
    narrative: '他搀她起来，穿上护具，再一次走向江边。夜色很深，路上空无一人。',
    build() {
      return sceneBackground(
        SCENE_BG.riverNightEmpty,
        'river-bg-scene',
        `
          <div class="vignette-love show" id="vignette"></div>
          <div class="couple-walk couple-on-river couple-walk-ltr show">
            ${FIGURES.boySide}
            <div class="girl-wrap">
              ${FIGURES.girl}
              <span class="brace-tag show" id="brace">护具</span>
            </div>
          </div>
        `
      );
    },
  },
  {
    id: 'heart-grow',
    narrative: '他的心里，那颗种子长成了巨大的心——大得快要溢出来。',
    build() {
      return `
        <div class="scene-layer active heart-stage">
          <div class="main-heart" id="main-heart">${HEART_SVG}</div>
          <div class="couple-river-solo" style="bottom:18%;z-index:2">
            ${FIGURES.boy}${FIGURES.girl}
          </div>
        </div>`;
    },
    onEnter(stage) {
      setTimeout(() => stage.querySelector('#main-heart')?.classList.add('grow'), 400);
      setTimeout(() => stage.querySelector('#main-heart')?.classList.add('grow-more'), 1600);
    },
  },
  {
    id: 'heart-care',
    narrative: '他偷偷掂量这份重量，怕它变成她的压力。巨大的心，化作无数小心，围绕着她。',
    build() {
      return `
        <div class="scene-layer active heart-stage">
          <div class="main-heart shrink" id="care-heart">${HEART_SVG}</div>
          <div class="orbit-hearts show" id="orbit">
            ${[1,2,3,4,5,6].map(() => '<span class="orbit-heart"></span>').join('')}
          </div>
          <div class="couple-river-solo" style="bottom:22%;z-index:2">
            ${FIGURES.girl}
          </div>
        </div>`;
    },
  },
  {
    id: 'recover',
    narrative: '她一点点好起来。而他，始终在那里。',
    build() {
      return `
        <div class="scene-layer active heart-stage">
          <div class="orbit-hearts show">
            ${[1,2,3,4].map(() => '<span class="orbit-heart"></span>').join('')}
          </div>
          <div class="couple-river-solo" style="bottom:30%">
            ${FIGURES.boy}${FIGURES.girl}
          </div>
        </div>`;
    },
  },
  {
    id: 'ending',
    narrative: '花海从脚下升起。她躺在一颗大大的心上——520，愿你平安，也愿我们在彼此身边。',
    build() {
      return `
        <div class="scene-layer active flower-scene">
          <div class="big-heart-bed" id="heart-bed">${HEART_SVG}</div>
          <div class="girl-on-heart" id="girl-heart">${FIGURES.girl}</div>
          <div class="flower-rise" id="flower-rise"></div>
          <p class="ending-text" id="ending-text">520</p>
        </div>`;
    },
    onEnter(stage) {
      setTimeout(() => stage.querySelector('#heart-bed')?.classList.add('show'), 300);
      setTimeout(() => stage.querySelector('#flower-rise')?.classList.add('full'), 800);
      setTimeout(() => stage.querySelector('#girl-heart')?.classList.add('show'), 1400);
      setTimeout(() => stage.querySelector('#ending-text')?.classList.add('show'), 2200);
    },
  },
];
