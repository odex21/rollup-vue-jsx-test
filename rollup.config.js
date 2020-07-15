// import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'

const output = [
  {
    file: `dist/index.js`,
    format: 'esm',
  },
]

const external = [
  'vue',
]


const plugins = [
  // typescript({
  //   tsconfig: 'tsconfig.json',
  // }),
  babel({
    exclude: 'node_modules/**',
    extensions: [
      ...DEFAULT_EXTENSIONS,
      '.ts',
      '.tsx'
    ],
  }),
]

export default {
  input: 'src/test.jsx',
  // input: 'src/test.tsx',
  output,
  plugins,
  // external
}
