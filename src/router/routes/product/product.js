export default [
  {
    path: '/product',
    component: () => import('@/views/product/index'),
    meta: { title: 'Product' },
    name: 'product',
  },
  // {
  //   path: '/project/new',
  //   component: () => import('@/views/project/create/PxvNewProject'),
  //   meta: { title: 'New Project' },
  //   name: 'new-project',
  // },
];
