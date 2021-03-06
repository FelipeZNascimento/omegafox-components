import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

export default {
  input: ['./src/index.tsx'],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true
  },
  plugins: [
    commonjs(),
    resolve(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
      resolveJsonModule: true,
      clean: true
    }),
    postcss(),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html'
    }),
    image()
  ],
  external: ['react', 'react-dom']
};
