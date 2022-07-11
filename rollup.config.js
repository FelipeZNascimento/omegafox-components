import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

import postcss from 'rollup-plugin-postcss';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

export default {
  input: ['./src/index.tsx'],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.build.json',
      clean: true,
    }),
    commonjs(),
    postcss(),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true
    })
  ],
  external: ['react', 'react-dom']
};
