// import typescript from 'rollup-plugin-typescript2';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import path from 'path';
// import vue from 'rollup-plugin-vue'

const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const path = require('path');
const vue = require('rollup-plugin-vue')


module.exports = {
  input: path.resolve(__dirname, '../packages/zy-ui/index.ts'),
  output: {
    format: 'es',
    file: 'lib/index.esm.js'
  },
  plugins: [
    nodeResolve(),
    vue({
      target: 'browser'
    }),
    typescript({
      tsconfigOverride: {
        exclude: [
          'node_modules',
          'website'
        ]
      }
    })
  ],
  external(id) {
    return /^vue/.test(id)
  }
}