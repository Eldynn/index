/* eslint-disable import/no-extraneous-dependencies */
import typescript from 'rollup-plugin-typescript2';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './build/index.js',
      format: 'umd',
      name: 'Index',
      sourcemap: true
    },
    {
      file: './build/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [typescript(), sourcemaps(), terser()]
};
