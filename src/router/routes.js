import product from '@/router/routes/product/product';
import login from '@/router/routes/auth/login';
import register from '@/router/routes/auth/register';
import error from '@/router/routes/error/error';

export default [
  {
    path: '/',
    name: 'main',
    redirect:{name:'product'},
    component: () => import('@/views/layouts/Layout'),
    meta: {
      middleware: ['authenticated'],
    },
    children: [...product],
  },
  {
    path: '/',
    component: () => import('@/views/auth/AuthLayout'),
    meta: {
    },
    children: [...login, ...register],
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/layouts/Layout'),
    children: [...error],
  },
];
