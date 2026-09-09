import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pcdcph.com',
  output: 'static',
  build: {
    format: 'directory',
    // The whole site's CSS is a few kilobytes. Keeping it inline holds the
    // page to a single render-blocking request, which matters because the
    // @font-face rules live in it.
    inlineStylesheets: 'always'
  }
});
