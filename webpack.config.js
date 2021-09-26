const path = require('path');

module.exports = {
  entry: './main.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { fallback: { fs: false } },
  optimization: {
    minimize: false, // TODO: re-enable again later; at the moment this breaks closebrace/openbrace in Tzo because minimization gets rid of their names, which are required to do brace matching
  }
};