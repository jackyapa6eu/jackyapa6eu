import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        // ...
      },
      // esbuild options, to transform jsx to js
      esbuildOptions: {
        // ...
      },
      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
      // include: '**/*.svg?react',
      //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
      exclude: '',
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style/index`,
        },
      ],
    }),
  ],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
