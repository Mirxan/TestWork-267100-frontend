import request from '@/utils/request';
class Product {
  static index() {
    return request({
      url: 'product',
      method: 'get',
    });
  }

  static create(params) {
    return request({
      url: 'product',
      method: 'post',
      data: params,
    });
  }

  static update(params) {
    return request({
      url: `product/${params.id}`,
      method: 'put',
      data: params,
    });
  }

  static delete(id) {
    return request({
      url: `product/${id}`,
      method: 'delete',
    });
  }
}

export default Product;
