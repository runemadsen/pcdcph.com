import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&family=Space+Mono&display=swap"
        rel="stylesheet"
      />
      <title>Processing Community Day Copenhagen 2021</title>
    </Helmet>
  );
};

export default memo(Head);
