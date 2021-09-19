import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import shim from 'rollup-plugin-shim';
import copy from 'rollup-plugin-copy';

export default {
  input: 'main.mjs',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'questmark-webrenderer'
  },
  plugins: [json(), commonjs(), shim({
    debug: `export default () => () => undefined`,
  }), nodePolyfills(), nodeResolve(),
  copy({
    targets: [
      { src: 'webRender-basic.js', dest: 'dist' }
    ],
    copyOnce: false
  })]
};