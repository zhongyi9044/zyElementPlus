// import typescript from 'rollup-plugin-typescript2';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import path from 'path';
// import vue from 'rollup-plugin-vue'
// import { getPackagesSync } from '@lerna/project'

const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const path = require('path');
const vue = require('rollup-plugin-vue')
const { getPackagesSync } = require('@lerna/project')

const inputs = getPackagesSync().map(pck => pck.name).filter(name => name.includes('@zy-ui'))

module.exports = inputs.map(name => {
  const packName = name.split('@zy-ui')[1]
  return {
    input: path.resolve(__dirname, `../packages/${packName}/index.ts`),
    output: {
      format: 'es',
      file: `lib/${packName}/index.js`
    },
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser'
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
          exclude: [
            'node_modules',
          ]
        }
      })
    ],
    external(id) {
      return /^vue/.test(id) || /^@zy-ui/.test(id)
    }
  }
})