import request from '@/utils/request';
class Auth {
  static login(params) {
    return request({
      url: '/auth/login',
      method: 'post',
      params,
    });
  }
  
  static logout() {
    return request({
      url: '/auth/logout',
      method: 'get',
    });
  }
}

export default Auth;
