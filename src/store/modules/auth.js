import { TokenService } from '@/utils/storage';
import Auth from '@/api/Auth';
import router from '@/router';

const state = {
  isAuthenticated: false,
  message: null,
};

const getters = {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  message(state) {
    return state.message;
  },
};

const actions = {
  async login({ commit }, payload) {
    try {
      const {data} = await Auth.login(payload);
      const token = data?.token;
      await TokenService.saveToken(token);
      await commit('SET_AUTHENTICATED', true);
      return true;
    } catch (e) {
      throw new Error(e);
    }
  },

  async authInit({ commit }) {
    try {
      const isAuth = TokenService.exists();
      commit('SET_AUTHENTICATED', isAuth);
      return true;
    } catch (e) {
      throw new Error(e);
    }
  },

  async logoutUser() {
    await Auth.logout();
    TokenService.removeToken();
    const route = router.history.current.name;
    if (route != 'login') router.push({ name: 'login' });
  },
};

const mutations = {
  SET_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload;
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  },
  LOG_OUT(state) {
    state.isAuthenticated = false;
    state.user = {};
    TokenService.removeToken();
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
