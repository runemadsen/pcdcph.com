import React from 'react';
import Head from './Head';
import Graphic from './Graphic';

import 'sanitize.css';
import '../styles/variables.css';
import '../styles/base.css';

import * as grid from '../styles/grid.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      <Graphic />
      <div className={grid.container}>{children}</div>
    </div>
  );
};

export default Layout;
