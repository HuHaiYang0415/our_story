(function () {
  const app = document.getElementById('app');
  const stage = document.getElementById('stage');
  const narrativeEl = document.getElementById('narrative');
  const ui = document.getElementById('ui');
  const introCurtain = document.getElementById('intro-curtain');
  const progress = document.getElementById('progress');
  const progressFill = document.getElementById('progress-fill');
  const bgm = document.getElementById('bgm');

  let index = 0;
  let started = false;
  let introDone = false;
  let autoTimer = null;
  let canAdvance = false;

  function setProgress() {
    const pct = ((index + 1) / SCENES.length) * 100;
    progressFill.style.width = pct + '%';
  }

  function clearAutoTimer() {
    if (autoTimer) {
      clearTimeout(autoTimer);
      autoTimer = null;
    }
  }

  function enableAdvance() {
    canAdvance = true;
    app.classList.add('can-tap');
  }

  function scheduleAdvance(scene, i) {
    const isLast = i >= SCENES.length - 1;
    let delay = 400;
    if (scene.autoAdvance > 0) {
      delay = scene.autoAdvance;
    } else if (isLast) {
      delay = 3200;
    } else if (scene.onEnter) {
      delay = 900;
    }
    if (i === 0 && !introDone) {
      delay = Math.max(delay, 4500);
    }
    autoTimer = setTimeout(() => enableAdvance(), delay);
  }

  function renderScene(i) {
    clearAutoTimer();
    const scene = SCENES[i];

    stage.innerHTML = scene.build();
    narrativeEl.textContent = scene.narrative;
    setProgress();

    canAdvance = false;
    app.classList.remove('can-tap');

    if (typeof scene.onEnter === 'function') {
      scene.onEnter(stage);
    }

    if (scene.autoAdvance && scene.autoAdvance > 0) {
      autoTimer = setTimeout(() => enableAdvance(), scene.autoAdvance);
    } else {
      scheduleAdvance(scene, i);
    }
  }

  function next() {
    if (!started || !canAdvance) return;

    if (index >= SCENES.length - 1) {
      index = 0;
      introDone = true;
      renderScene(index);
      return;
    }

    index += 1;
    renderScene(index);
  }

  function onTap() {
    if (!started) return;
    if (!canAdvance) {
      if (autoTimer) {
        clearAutoTimer();
        enableAdvance();
      }
      return;
    }
    next();
  }

  function finishIntro() {
    introDone = true;
    introCurtain.classList.add('gone');
    ui.classList.add('visible');
    setTimeout(() => {
      introCurtain.remove();
    }, 1400);
  }

  function launch() {
    if (started) return;
    started = true;
    progress.classList.add('visible');
    ui.classList.remove('visible');

    const bgmSrc = bgm?.querySelector('source')?.src || bgm?.src;
    if (bgm && bgmSrc) {
      bgm.play().catch(() => {});
    }

    index = 0;
    renderScene(0);

    requestAnimationFrame(() => {
      introCurtain.classList.add('fade-out');
      const layer = stage.querySelector('.road-scene');
      if (layer) layer.classList.add('road-reveal');
    });

    setTimeout(finishIntro, 1100);
  }

  app.addEventListener('click', onTap);

  document.addEventListener('keydown', (e) => {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    e.preventDefault();
    if (!started) launch();
    else onTap();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', launch);
  } else {
    launch();
  }
})();
