/*
 * @Author: zhouyinkui
 * @Date: 2022-06-17 14:35:34
 * @LastEditors: zhouyinkui
 * @LastEditTime: 2024-01-16 16:13:07
 * @Description:
 */
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import esbuild from 'rollup-plugin-esbuild'
import { visualizer } from 'rollup-plugin-visualizer'
import strip from '@rollup/plugin-strip'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const extensions = ['.mjs', '.js', '.json', '.ts']

export default defineConfig([
  {
    input: path.resolve(__dirname, '../src/index.ts'),
    output: {
      dir: path.dirname(pkg.module),
      format: 'es',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false
    },
    plugins: [
      commonjs(),
      resolve({
        extensions
      }),
      typescript({
        compilerOptions: {
          outDir: 'es',
          declaration: true,
          emitDeclarationOnly: true,
          declarationDir: 'es',
          sourceMap: false
        }
      }),
      esbuild({
        tsconfig: path.resolve(__dirname, '../tsconfig.json'),
        target: 'esnext',
        minify: true
      }),
      strip(),
      visualizer()
    ]
  },
  {
    input: path.resolve(__dirname, '../src/index.ts'),
    output: {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false
    },
    plugins: [
      commonjs(),
      resolve({
        extensions
      }),
      esbuild({
        tsconfig: path.resolve(__dirname, '../tsconfig.json'),
        target: 'esnext',
        minify: true
      }),
      strip()
    ]
  },
  {
    input: path.resolve(__dirname, '../src/index.ts'),
    output: {
      file: path.resolve(__dirname, '../dist/index.js'),
      format: 'umd',
      name: 'MoYuCore',
      exports: 'named',
      sourcemap: false
    },
    plugins: [
      commonjs(),
      resolve({
        extensions
      }),
      esbuild({
        tsconfig: path.resolve(__dirname, '../tsconfig.json'),
        target: 'esnext',
        minify: true
      }),
      strip()
    ]
  }
])
