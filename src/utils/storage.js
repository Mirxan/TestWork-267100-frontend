const TOKEN_KEY = 'access_token';

const TokenService = {
  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  },
  saveToken(token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  },
  removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  },
  exists() {
    return !!this.getToken();
  },
};

export { TokenService };
