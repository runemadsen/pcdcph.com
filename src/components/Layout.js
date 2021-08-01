import React from 'react';
import Head from './Head';
import Graphic from './Graphic';

import 'sanitize.css';
import '../styles/variables.css';
import '../styles/base.css';

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Head />
      <Graphic />
      {children}
    </div>
  );
};

export default Layout;
