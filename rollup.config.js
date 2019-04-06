import typescript from 'rollup-plugin-typescript2';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.ts',
  plugins: [typescript(), sourcemaps(), uglify()],
  output: {
    file: './build/index.js',
    name: 'Index',
    format: 'umd',
    sourcemap: true
  }
};
