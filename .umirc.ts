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
      routes: [
        { exact: true, path: '/', redirect: '/restaurants' },
        { path: '/restaurants', component: '@/pages/Restaurants' },
      ],
    },
  ],
  fastRefresh: {},
});
