import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';
import middlewares from '@/router/middlewares';
// Store
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  base: '/',
  routes,
});
router.beforeEach(async (to, from, next) => {
  await store.dispatch('auth/authInit').catch((er) => console.error('Error in getting user :>> ', er));
  // Check for route middlewares
  for (const r of to.matched) {
    if (r.meta && r.meta.middleware && Array.isArray(r.meta.middleware)) {
      for (const middleware of r.meta.middleware) {
        if (middlewares[middleware]) {
          const res = middlewares[middleware]();
          if (res.invalid) return next(res.redirect || { name: 'login' });
        }
      }
    }
  }
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  return next();
});

export default router;
