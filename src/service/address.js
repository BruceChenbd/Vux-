import { post } from '../utils/service';
/**
 * 用户登录
 * @param {*} data 登录需要传递的数据
 * userName  用户名
 * pwd       密码
 */
export function subAddress(data) {
    return post('http://localhost:3000/api/v1/product_type/address', data);
}