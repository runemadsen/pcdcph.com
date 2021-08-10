import { useState, useEffect } from 'react';

export const useFontsReady = () => {
  const [fontsReady, setFontsReady] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsReady(true);
    });
  }, []);
  return fontsReady;
};
