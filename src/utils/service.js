//此文件中的内容用来发送http请求
import axios from 'axios';
/**
 * get请求
 * @param {*} url 请求的地址
 * @param {*} params 请求传递的参数 const get==function get(){
 * }
 */
export function get(url, params) {
    return axios.get(url, {
        params
    })
}
/**
 * post请求
 * @param {*} url 请求的地址
 * @param {*} data 请求传递的参数
 */
export const post = (url, data) => axios.post(url, data);