const generateScopedName = require('mini-css-class-name/postcss-modules');

module.exports = {
  modules: true,
  plugins: {
    'postcss-modules': {
      generateScopedName: generateScopedName(),
    },
  },
};
