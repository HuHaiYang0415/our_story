(function () {
  const HEART_SVG = `<svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
    <path d="M50 88 C20 62 5 45 5 28 C5 14 16 5 28 5 C38 5 46 12 50 20 C54 12 62 5 72 5 C84 5 95 14 95 28 C95 45 80 62 50 88Z"/>
  </svg>`;

  const SAD_FIGURE_SVG = `<svg class="sad-figure" viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="36" cy="52" rx="22" ry="26" fill="#f5d0d8"/>
    <circle cx="36" cy="28" r="20" fill="#fce8ec"/>
    <ellipse cx="28" cy="30" rx="4" ry="5" fill="#5c4a52"/>
    <ellipse cx="44" cy="30" rx="4" ry="5" fill="#5c4a52"/>
    <path d="M30 38 Q36 34 42 38" stroke="#c97a88" stroke-width="2" stroke-linecap="round" fill="none"/>
    <ellipse cx="22" cy="34" rx="5" ry="3" fill="#f0a4bc" opacity="0.5"/>
    <ellipse cx="50" cy="34" rx="5" ry="3" fill="#f0a4bc" opacity="0.5"/>
    <path d="M28 22 Q36 14 44 22" stroke="#8b6b75" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <ellipse cx="18" cy="48" rx="6" ry="4" fill="#f0a4bc" opacity="0.35" transform="rotate(-20 18 48)"/>
    <ellipse cx="54" cy="48" rx="6" ry="4" fill="#f0a4bc" opacity="0.35" transform="rotate(20 54 48)"/>
    <path d="M32 78 L36 84 L40 78" stroke="#c97a88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const PLEAD_PLACEHOLDER = `<span class="plead-emoji" aria-hidden="true">🥺</span><span class="plead-text">求求你嘛</span>`;

  const app = document.getElementById('app');
  const stage = document.getElementById('stage');
  const choicesEl = document.getElementById('choices');
  const bgm = document.getElementById('bgm');
  const bgmToggle = document.getElementById('bgm-toggle');

  const BG_CONFIG = {
    opening: { src: ASSETS.bgOpening, theme: 'theme-opening' },
    walk: { src: ASSETS.bgWalk, theme: 'theme-walk' },
    snack: { src: ASSETS.bgSnack, theme: 'theme-snack' },
    flowers: { src: ASSETS.bgFlowers, theme: 'theme-flowers' },
    ending: { src: ASSETS.bgEnding, theme: 'theme-ending' },
  };

  const BGM_GAP_MS = 5000;
  let bgmGapTimer = null;

  const state = {
    holdingHands: true,
    openingPhase: 'initial',
    handPhase: 'initial',
    busy: false,
    currentNodeId: 'opening',
    bgmOn: false,
    bgmUserPaused: false,
  };

  function clearBgmGapTimer() {
    if (bgmGapTimer) {
      clearTimeout(bgmGapTimer);
      bgmGapTimer = null;
    }
  }

  function scheduleBgmGapReplay() {
    clearBgmGapTimer();
    if (!bgm || !state.bgmOn || state.bgmUserPaused) return;
    bgmGapTimer = setTimeout(() => {
      bgmGapTimer = null;
      if (!state.bgmOn || state.bgmUserPaused) return;
      bgm.currentTime = 0;
      bgm.play().catch(() => {});
    }, BGM_GAP_MS);
  }

  function initBgm() {
    if (!bgm) return;
    const src = ASSETS.bgm;
    if (src) {
      const source = bgm.querySelector('source');
      if (source) source.src = src;
      else bgm.src = src;
    }
    bgm.removeAttribute('loop');
    bgm.volume = 0.5;
    bgm.addEventListener('ended', scheduleBgmGapReplay);

    if (bgmToggle) {
      bgmToggle.classList.remove('hidden');
      bgmToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBgm();
      });
      updateBgmToggleLabel();
    }
  }

  function updateBgmToggleLabel() {
    if (!bgmToggle) return;
    bgmToggle.textContent = state.bgmOn ? '音乐' : '静音';
    bgmToggle.classList.toggle('is-off', !state.bgmOn);
  }

  function tryStartBgm() {
    if (!bgm || state.bgmUserPaused) return;
    if (state.bgmOn && !bgm.paused) return;
    bgm
      .play()
      .then(() => {
        state.bgmOn = true;
        state.bgmUserPaused = false;
        updateBgmToggleLabel();
      })
      .catch(() => {});
  }

  function toggleBgm() {
    if (!bgm) return;
    if (state.bgmOn) {
      clearBgmGapTimer();
      bgm.pause();
      state.bgmOn = false;
      state.bgmUserPaused = true;
    } else {
      state.bgmUserPaused = false;
      state.bgmOn = true;
      bgm
        .play()
        .then(() => updateBgmToggleLabel())
        .catch(() => {
          state.bgmOn = false;
          updateBgmToggleLabel();
        });
      return;
    }
    updateBgmToggleLabel();
  }

  function escapeHtml(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function formatPrompt(text) {
    return escapeHtml(text).replace(/\n/g, '<br>');
  }

  function clearChoices() {
    choicesEl.classList.add('hidden');
    choicesEl.innerHTML = '';
  }

  function setAppTheme(bgKey) {
    const cfg = BG_CONFIG[bgKey] || BG_CONFIG.opening;
    app.dataset.theme = cfg.theme;
  }

  const prefetchedUrls = new Set();

  function prefetchUrl(url) {
    if (!url || prefetchedUrls.has(url)) return;
    prefetchedUrls.add(url);
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
  }

  function applyImgLoading(img, { lazy = true, priority = false } = {}) {
    if (!img) return;
    img.decoding = 'async';
    if (lazy) img.loading = 'lazy';
    if (priority && 'fetchPriority' in img) img.fetchPriority = 'high';
  }

  function collectNodeUrls(node) {
    if (!node) return [];
    const urls = [];
    if (node.image) urls.push(node.image);
    const bg = node.bg && BG_CONFIG[node.bg];
    if (bg?.src) urls.push(bg.src);
    if (node.choices) {
      node.choices.forEach((c) => {
        const next = NODES[c.next];
        if (next?.image) urls.push(next.image);
      });
    }
    if (node.next) {
      const next = NODES[node.next];
      if (next?.image) urls.push(next.image);
      if (next?.bg && BG_CONFIG[next.bg]?.src) urls.push(BG_CONFIG[next.bg].src);
    }
    return urls;
  }

  function prefetchForNode(nodeId) {
    collectNodeUrls(NODES[nodeId]).forEach(prefetchUrl);
    const node = NODES[nodeId];
    if (node?.next) collectNodeUrls(NODES[node.next]).forEach(prefetchUrl);
  }

  function renderStageBg(bgKey, eagerBg) {
    const cfg = BG_CONFIG[bgKey] || BG_CONFIG.opening;
    const src = escapeHtml(cfg.src);
    const theme = cfg.theme;
    const loading = eagerBg ? 'eager' : 'lazy';
    const fetchPri = eagerBg ? ' fetchpriority="high"' : '';
    return `
      <div class="scene-bg ${theme}" data-bg-key="${escapeHtml(bgKey)}" aria-hidden="true">
        <div class="scene-bg-fallback"></div>
        <img class="scene-bg-img" src="${src}" alt="" loading="${loading}" decoding="async"${fetchPri}>
        <div class="scene-bg-shade"></div>
      </div>
    `;
  }

  function initStageBackground(root) {
    const wrap = root.querySelector('.scene-bg');
    const img = wrap?.querySelector('.scene-bg-img');
    if (!wrap || !img) return;

    const markLoaded = () => {
      if (img.naturalWidth > 0) wrap.classList.add('has-image');
    };

    if (img.complete) markLoaded();
    else img.addEventListener('load', markLoaded);

    img.addEventListener('error', () => {
      img.remove();
      wrap.classList.remove('has-image');
    });
  }

  function mountStage(html, bgKey, options) {
    const eagerBg = options?.eagerBg === true;
    setAppTheme(bgKey);
    stage.innerHTML = html;
    initStageBackground(stage);
  }

  function spawnHearts(count, onDone) {
    const layer = document.createElement('div');
    layer.className = 'hearts-layer';
    layer.setAttribute('aria-hidden', 'true');

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'heart-bubble';
      el.style.setProperty('--x', 15 + Math.random() * 70 + '%');
      el.style.setProperty('--y', 35 + Math.random() * 40 + '%');
      el.style.setProperty('--size', 18 + Math.random() * 22 + 'px');
      el.style.setProperty('--dur', 1.8 + Math.random() * 1.4 + 's');
      el.style.setProperty('--delay', Math.random() * 0.6 + 's');
      el.style.setProperty('--drift-x', (Math.random() - 0.5) * 60 + 'px');
      el.innerHTML = HEART_SVG;
      layer.appendChild(el);
    }

    stage.appendChild(layer);
    setTimeout(() => {
      layer.remove();
      if (onDone) onDone();
    }, 2200);
  }

  function showToast(text, ms, then) {
    state.busy = true;
    clearChoices();
    const toast = document.createElement('p');
    toast.className = 'toast';
    toast.textContent = text;
    stage.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
        state.busy = false;
        if (then) then();
      }, 350);
    }, ms || 1400);
  }

  function buildSticker(className, innerHtml) {
    const wrap = document.createElement('div');
    wrap.className = className;
    wrap.innerHTML = innerHtml;
    return wrap;
  }

  function showOpeningBegImage() {
    hideHandHint();
    let wrap = choicesEl.querySelector('.opening-beg-wrap');
    if (!wrap) {
      wrap = buildSticker('opening-beg-wrap', '');
      const img = document.createElement('img');
      img.className = 'opening-beg-img';
      img.alt = '';
      img.src = ASSETS.pleadBeg;
      img.addEventListener('load', () => img.classList.add('loaded'));
      if (img.complete) img.classList.add('loaded');
      wrap.appendChild(img);
      choicesEl.appendChild(wrap);
    }
    requestAnimationFrame(() => wrap.classList.add('show'));
  }

  function hideOpeningBegImage() {
    choicesEl.querySelector('.opening-beg-wrap')?.classList.remove('show');
  }

  function showHandHintEmoji() {
    hideOpeningBegImage();
    let wrap = choicesEl.querySelector('.hand-hint-wrap');
    if (!wrap) {
      wrap = buildSticker('hand-hint-wrap', PLEAD_PLACEHOLDER);
      choicesEl.appendChild(wrap);
    }
    requestAnimationFrame(() => wrap.classList.add('show'));
  }

  function hideHandHint() {
    choicesEl.querySelector('.hand-hint-wrap')?.classList.remove('show');
  }

  function hideAllChoiceStickers() {
    hideOpeningBegImage();
    hideHandHint();
    choicesEl.querySelector('.sad-figure-wrap')?.classList.remove('show');
  }

  function buildChoiceRow(options, onPick) {
    const row = document.createElement('div');
    row.className = 'choices-row';

    options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'choice-btn';
      btn.textContent = opt.label;
      if (opt.yes) btn.classList.add('yes');
      btn.addEventListener('click', () => {
        if (state.busy) return;
        onPick(opt);
      });
      row.appendChild(btn);
    });

    choicesEl.innerHTML = '';
    choicesEl.appendChild(row);
    choicesEl.classList.remove('hidden');
  }

  function bindImgFallback(img, placeholderLabel) {
    applyImgLoading(img, { lazy: true });
    img.addEventListener('load', () => img.classList.add('loaded'));
    img.addEventListener('error', () => {
      img.classList.add('hidden');
      const ph = img.parentElement.querySelector('.img-placeholder');
      if (ph) {
        ph.classList.add('show');
        ph.textContent = placeholderLabel;
      }
    });
  }

  /* ---------- Opening ---------- */
  function renderOpeningChoices() {
    if (state.openingPhase === 'forced') {
      buildChoiceRow(
        [
          { label: '想', yes: true },
          { label: '想', yes: true },
        ],
        () => onOpeningYes()
      );
      showOpeningBegImage();
      return;
    }

    hideOpeningBegImage();

    const rowOpts = [
      { label: '想', yes: true, kind: 'yes' },
      { label: '不想', yes: false, kind: 'no' },
    ];
    const row = document.createElement('div');
    row.className = 'choices-row';
    if (state.openingPhase === 'swapped') row.classList.add('swapped');

    rowOpts.forEach((opt) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'choice-btn' + (opt.yes ? ' yes' : '');
      if (state.openingPhase === 'forced' && opt.yes) btn.classList.add('forced-yes');
      btn.textContent = opt.label;
      btn.addEventListener('click', () => {
        if (state.busy) return;
        if (opt.kind === 'yes') onOpeningYes();
        else onOpeningNo();
      });
      row.appendChild(btn);
    });

    choicesEl.innerHTML = '';
    choicesEl.appendChild(row);
    choicesEl.classList.remove('hidden');
  }

  function onOpeningYes() {
    if (state.busy) return;
    state.busy = true;
    clearChoices();
    spawnHearts(24, () => {
      state.busy = false;
      goToNode('bridge');
    });
  }

  function onOpeningNo() {
    if (state.openingPhase === 'initial') {
      state.openingPhase = 'swapped';
      renderOpeningChoices();
      return;
    }
    if (state.openingPhase === 'swapped') {
      state.openingPhase = 'forced';
      renderOpeningChoices();
    }
  }

  function renderOpening() {
    state.currentNodeId = 'opening';
    state.openingPhase = 'initial';
    state.handPhase = 'initial';
    state.holdingHands = true;
    const node = NODES.opening;
    mountStage(
      `${renderStageBg(node.bg || 'opening', true)}<p class="prompt">${formatPrompt(node.prompt)}</p>`,
      node.bg || 'opening',
      { eagerBg: true }
    );
    renderOpeningChoices();
    prefetchUrl(ASSETS.bgWalk);
    prefetchUrl(ASSETS.pleadBeg);
  }

  /* ---------- Generic nodes ---------- */
  function goToNode(id) {
    state.currentNodeId = id;
    const node = NODES[id];
    if (!node) return;

    prefetchForNode(id);

    switch (node.type) {
      case 'tap':
        renderTapNode(node);
        break;
      case 'choice':
        renderChoiceNode(node);
        break;
      case 'travel-photo':
        renderTravelPhoto(node);
        break;
      case 'hand':
        renderHandNode(node);
        break;
      case 'walk-image':
        renderWalkVisual(node);
        break;
      case 'flowers':
        renderFlowers(node);
        break;
      case 'ending':
        renderEnding(node);
        break;
      default:
        break;
    }
  }

  function renderTapNode(node) {
    clearChoices();
    const bg = node.bg || 'opening';
    mountStage(
      `
      ${renderStageBg(bg)}
      <div class="scene-copy">
        <p class="prompt">${formatPrompt(node.prompt)}</p>
        ${node.sub ? `<p class="sub">${escapeHtml(node.sub)}</p>` : ''}
      </div>
    `,
      bg
    );
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-btn yes continue-btn';
    btn.textContent = '继续';
    btn.addEventListener('click', () => {
      if (state.busy) return;
      goToNode(node.next);
    });
    const row = document.createElement('div');
    row.className = 'choices-row';
    row.appendChild(btn);
    choicesEl.innerHTML = '';
    choicesEl.appendChild(row);
    choicesEl.classList.remove('hidden');
  }

  function renderChoiceNode(node) {
    clearChoices();
    hideAllChoiceStickers();
    const bg = node.bg || 'walk';
    mountStage(
      `
      ${renderStageBg(bg)}
      <div class="scene-copy">
        <p class="prompt">${formatPrompt(node.prompt)}</p>
      </div>
    `,
      bg
    );

    buildChoiceRow(
      node.choices.map((c) => ({ label: c.label, yes: c.yes === true, value: c })),
      (opt) => {
        const c = opt.value;
        showToast(c.feedback, 1500, () => goToNode(c.next));
      }
    );
  }

  function renderTravelPhoto(node) {
    clearChoices();
    hideAllChoiceStickers();
    const bg = node.bg || 'walk';
    const src = node.image || '';
    const ph = node.placeholder || '放入出游照片';
    const captionHtml = node.caption
      ? `<p class="travel-photo-caption">${escapeHtml(node.caption)}</p>`
      : '';

    mountStage(
      `
      ${renderStageBg(bg)}
      <div class="travel-photo-scene">
        <p class="prompt travel-photo-prompt">${formatPrompt(node.prompt)}</p>
        <div class="travel-photo-frame">
          <img class="travel-photo-img" src="${escapeHtml(src)}" alt="">
          <div class="img-placeholder">${escapeHtml(ph)}</div>
        </div>
        ${captionHtml}
      </div>
    `,
      bg
    );
    bindImgFallback(stage.querySelector('.travel-photo-img'), ph);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-btn yes continue-btn';
    btn.textContent = node.button || '继续';
    btn.addEventListener('click', () => {
      if (state.busy) return;
      goToNode(node.next);
    });
    const row = document.createElement('div');
    row.className = 'choices-row';
    row.appendChild(btn);
    choicesEl.innerHTML = '';
    choicesEl.appendChild(row);
    choicesEl.classList.remove('hidden');
  }

  function renderHandNode(node) {
    state.handPhase = 'initial';
    hideAllChoiceStickers();
    const bg = node.bg || 'walk';
    mountStage(
      `
      ${renderStageBg(bg)}
      <div class="scene-copy">
        <p class="prompt">${formatPrompt(node.prompt)}</p>
      </div>
    `,
      bg
    );

    buildChoiceRow(
      [
        { label: '好', yes: true, value: 'yes' },
        { label: '不好', yes: false, value: 'no' },
      ],
      (opt) => handleHandChoice(opt.value, node)
    );

    if (state.handPhase === 'pleaded') showHandHintEmoji();
  }

  function handleHandChoice(value, node) {
    if (value === 'yes') {
      state.holdingHands = true;
      hideHandHint();
      goToNode(node.next);
      return;
    }

    if (state.handPhase === 'initial') {
      state.handPhase = 'pleaded';
      showHandHintEmoji();
      return;
    }

    state.holdingHands = false;
    hideHandHint();
    goToNode(node.next);
  }

  function renderWalkVisual(node) {
    clearChoices();
    const hold = state.holdingHands;
    const src = hold ? ASSETS.walkHolding : ASSETS.walkNotHolding;
    const caption = hold ? node.captionHold : node.captionNoHold;
    const phLabel = hold ? '放入 walk-holding-hands.png' : '放入 walk-not-holding-hands.png';

    const bg = node.bg || 'walk';
    mountStage(
      `
      ${renderStageBg(bg)}
      <div class="visual-scene">
        <div class="visual-frame">
          <img class="scene-illustration" src="${src}" alt="">
          <div class="img-placeholder">${escapeHtml(phLabel)}</div>
        </div>
        <p class="caption">${escapeHtml(caption)}</p>
      </div>
    `,
      bg
    );
    const img = stage.querySelector('.scene-illustration');
    bindImgFallback(img, phLabel);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-btn yes continue-btn';
    btn.textContent = '继续走';
    btn.addEventListener('click', () => goToNode(node.next));
    const row = document.createElement('div');
    row.className = 'choices-row';
    row.appendChild(btn);
    choicesEl.innerHTML = '';
    choicesEl.appendChild(row);
    choicesEl.classList.remove('hidden');
  }

  function renderFlowers(node) {
    clearChoices();
    const linesHtml = node.lines.map((l) => `<p class="flower-line">${escapeHtml(l)}</p>`).join('');

    const bg = node.bg || 'flowers';
    mountStage(
      `
      ${renderStageBg(bg)}
      <div class="flowers-scene">
        <div class="flower-visual-frame">
          <img class="scene-illustration flower-img" src="${ASSETS.flower}" alt="永生花">
          <div class="img-placeholder">放入 flower-preserved.png</div>
        </div>
        <div class="flower-copy">${linesHtml}</div>
      </div>
    `,
      bg
    );
    bindImgFallback(stage.querySelector('.flower-img'), '放入 flower-preserved.png');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-btn yes continue-btn';
    btn.textContent = node.button;
    btn.addEventListener('click', () => goToNode(node.next));
    const row = document.createElement('div');
    row.className = 'choices-row';
    row.appendChild(btn);
    choicesEl.innerHTML = '';
    choicesEl.appendChild(row);
    choicesEl.classList.remove('hidden');
  }

  function endingHeartDecos() {
    return ['tl', 'tr', 'bl', 'br', 't', 'r', 'b', 'l']
      .map(
        (pos) =>
          `<span class="heart-deco heart-deco-${pos}" aria-hidden="true">${HEART_SVG}</span>`
      )
      .join('');
  }

  function renderEnding(node) {
    clearChoices();
    choicesEl.classList.add('hidden');
    choicesEl.innerHTML = '';
    app.classList.add('ending-mode');
    const linesHtml = node.lines.map((l) => `<p class="ending-line">${escapeHtml(l)}</p>`).join('');
    const closing = node.closingLine
      ? `<p class="ending-closing" id="ending-closing">${escapeHtml(node.closingLine)}</p>`
      : '';

    const bg = node.bg || 'ending';
    mountStage(
      `
      ${renderStageBg(bg)}
      <div class="ending-layout">
        <div class="ending-center">
          <div class="ending-heart-frame">
            ${endingHeartDecos()}
            <div class="ending-scene">
              <h1 class="ending-title">${escapeHtml(node.title)}</h1>
              <div class="ending-body">${linesHtml}</div>
            </div>
          </div>
        </div>
        ${closing}
      </div>
    `,
      bg
    );

    if (node.closingLine) {
      const delay = 2200 + (node.lines?.length || 0) * 400;
      setTimeout(() => {
        document.getElementById('ending-closing')?.classList.add('show');
      }, delay);
    }
  }

  function initBackToEnvelope() {
    const btn = document.getElementById('btn-back-envelope');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const saved = sessionStorage.getItem('companion520-return');
      if (saved) {
        window.location.href = saved;
        return;
      }
      window.location.href = new URL('../index.html#envelopes', window.location.href).href;
    });
  }

  function init() {
    app.classList.remove('ending-mode');
    app.removeAttribute('data-theme');
    initBgm();
    initBackToEnvelope();
    renderOpening();
    tryStartBgm();
    [
      ASSETS.travelPhoto1,
      ASSETS.travelPhoto2,
      ASSETS.firstMeetSparkler,
      ASSETS.walkHolding,
      ASSETS.walkNotHolding,
      ASSETS.flower,
      ASSETS.giftCurtain,
    ].forEach((u) => prefetchUrl(u));
    const unlockBgm = () => tryStartBgm();
    document.addEventListener('pointerdown', unlockBgm, { once: true, passive: true });
    document.addEventListener('touchstart', unlockBgm, { once: true, passive: true });
  }

  init();
})();
