import React, { memo } from 'react';

import * as css from './Graphic.module.css';

const Graphic = () => {
  return (
    <svg className={css.root} width="1440" height="400">
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
      <rect
        fill={`url(#pattern)`}
        width="150%"
        height="100%"
        transform="translate(-100 0) rotate(-5)"
      />
      <line
        x1={348}
        y1={-30}
        x2={446}
        y2={173}
        stroke="var(--processing-light)"
        strokeWidth={155}
      />
    </svg>
  );
};

export default memo(Graphic);
