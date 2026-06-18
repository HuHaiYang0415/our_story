import React from 'react';
import { SCROLL_SCENES } from '../scroll-beats';

interface SceneProgressProps {
  index: number;
  visited: ReadonlySet<number>;
  onSelect: (i: number) => void;
}

/** 卷轴侧栏六枚淡章印：默认半透明，当前幕略染朱 */
export function SceneProgress({ index, visited, onSelect }: SceneProgressProps) {
  return (
    <nav className="db-scroll-seals" aria-label="长卷分幕">
      {SCROLL_SCENES.map((scene, i) => {
        const isActive = i === index;
        const isVisited = visited.has(i) && !isActive;
        return (
          <button
            key={scene.id}
            type="button"
            aria-label={`${scene.chapter} · ${scene.sceneLabel}`}
            aria-current={isActive ? 'step' : undefined}
            onClick={() => onSelect(i)}
            className={[
              'db-scroll-seal',
              isActive ? 'db-scroll-seal--active' : '',
              isVisited ? 'db-scroll-seal--visited' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span className="db-scroll-seal-face" aria-hidden>
              {scene.chapter}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
