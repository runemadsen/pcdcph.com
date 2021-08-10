import React, { memo } from 'react';
import { useFontsReady } from '../hooks';

import * as css from './Graphic.module.css';

const Graphic = () => {
  const fontsReady = useFontsReady();
  return (
    <svg className={css.root} viewBox="0 0 1440 400">
      <defs>
        <pattern
          id="pattern"
          x={0}
          y="100%"
          width={218}
          height={40}
          patternUnits="userSpaceOnUse"
        >
          <text x={0} y={32} fontSize={32} fill="var(--processing-dark)">
            PCD CPH 2021
          </text>
        </pattern>
      </defs>
      {fontsReady && (
        <rect
          fill={`url(#pattern)`}
          width="150%"
          height="100%"
          transform="translate(-100 0) rotate(-5)"
        />
      )}
      <line
        x1={348}
        y1={-30}
        x2={446}
        y2={173}
        stroke="var(--processing-light)"
        strokeWidth={155}
      />
      <line
        x1={813}
        y1={-71}
        x2={509}
        y2={343}
        stroke="var(--processing-dark)"
        strokeWidth={155}
      />
      <path
        d="M 835 -125 C 1141 -125 1141 284 835 284"
        stroke="var(--processing-mid)"
        fill="none"
        strokeWidth={155}
      />
    </svg>
  );
};

export default memo(Graphic);
