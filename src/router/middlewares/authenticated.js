import store from '@/store';

export default function () {
  const authenticated = store.getters['auth/isAuthenticated'];
  const valid = !!authenticated;
  return { invalid: !valid };
}
