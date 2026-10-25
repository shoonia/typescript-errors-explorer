import babel from '@rolldown/plugin-babel';
import generateScopedName from 'mini-css-class-name/postcss-modules';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  root: 'src',
  base: '/typescript-errors-explorer/',
  server: { open: true },
  build: {
    outDir: '../dist',
    assetsDir: '.',
    emptyOutDir: true,
    target: 'esnext',
    cssCodeSplit: false,
    minify: isProd ? 'terser' : false,
    terserOptions: {
      ecma: 2025,
      module: true,
      toplevel: true,
      sourceMap: false,
      compress: {
        ecma: 2025,
        module: true,
        comparisons: false,
        inline: 2,
        drop_console: true,
        passes: 3,
        toplevel: true,
        pure_getters: true,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_symbols: true,
      },
    },
    sourcemap: isDev,
    modulePreload: false,
    reportCompressedSize: true,
    rolldownOptions: {
      treeshake: isProd,
    },
  },
  css: {
    modules: {
      generateScopedName: isProd
        ? generateScopedName()
        : '[name]__[local]___[hash:base64:5]',
    },
  },
  oxc: {
    target: 'esnext',
    jsx: 'preserve',
  },
  plugins: [
    babel({
      include: /\.tsx$/,
      presets: ['jsx-dom-runtime/babel-preset'],
      comments: isDev,
      compact: isProd,
      sourceMap: isDev,
    }),
    viteSingleFile(),
  ],
});
