export default [
  {
    path: '/register',
    component: () => import('@/views/auth/Register'),
    meta: { title: 'Sign up' },
    name: 'register',
  },
];
