import { emptyDirSync, copySync } from 'fs-extra';
import css from 'rollup-plugin-css-only';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const extensions = ['.js'];

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
    babel({
      babelHelpers: 'bundled',
      extensions,
      presets: [
        'jsx-dom-runtime/babel-preset',
      ],
    }),
    nodeResolve({
      extensions,
      browser: true,
    }),
    commonjs(),
  ],
  watch: {
    clearScreen: false,
  },
}
