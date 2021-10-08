import { emptyDirSync, copySync } from 'fs-extra';
import css from 'rollup-plugin-css-only';

emptyDirSync('./dist');
copySync('./static', './dist');

export default {
  input: './src/main.js',
  output: {
    file: './dist/main.js',
    format: 'es',
  },
  plugins: [
    css({
      output: 'styles.css',
    }),
  ],
  watch: {
    clearScreen: false,
  },
}
