import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ssr: {},
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [{ path: '/', component: '@/pages/Restaurants' }],
    },
  ],
  fastRefresh: {},
});
