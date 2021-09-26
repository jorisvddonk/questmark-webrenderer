const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './main.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { fallback: { fs: false } },
  optimization: {
    minimize: true,
    mangleExports: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
        },
      }),
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "webRender-basic.js", to: "webRender-basic.js" }
      ],
    }),
  ],
};