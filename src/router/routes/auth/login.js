export default [
  {
    path: '/login',
    component: () => import('@/views/auth/Login'),
    meta: { title: 'Sign in' },
    name: 'login',
  },
];
