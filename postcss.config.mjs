import globalData from '@csstools/postcss-global-data';
import customMedia from 'postcss-custom-media';
import nesting from 'postcss-nesting';

export default {
  plugins: [
    globalData({ files: ['./src/styles/variables.css'] }),
    customMedia(),
    nesting()
  ]
};
