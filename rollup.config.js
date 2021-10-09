import { emptyDirSync, copySync, writeFile } from 'fs-extra';
import css from 'rollup-plugin-css-only';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'postcss';
import cssnano from 'cssnano';

const isProd = !process.env.ROLLUP_WATCH;
const isDev = !isProd;
const nodeEnv = isProd ? 'production' : 'development';
const extensions = ['.js'];

process.env.NODE_ENV = nodeEnv;
emptyDirSync('./dist');
copySync('./static', './dist');

export default {
  input: './src/main.js',
  output: {
    file: './dist/main.js',
    format: 'iife',
  },
  plugins: [
    css({
      output: isDev
        ? 'styles.css'
        : (styles) => {
          return postcss([
            cssnano(),
          ])
            .process(styles)
            .then(
              ({ css }) => writeFile('./dist/styles.css', css),
            );
        }
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
    isProd && terser(),
    isDev && serve({
      contentBase: './dist',
      port: 3000,
    }),
    isDev && livereload({
      delay: 300,
    }),
  ],
  watch: {
    clearScreen: false,
  },
}
