import Cookies from 'js-cookie';

/**
 * 获取购物车中的产品信息
 */
export function getShopCart() {
  // console.log(JSON.parse(Cookies.get('nb_shop_cart')));
  let goods = [];
  try {
    // 读取cookies中已有的数据
    goods = JSON.parse(Cookies.get('shop_cart'));
  } catch (error) {
    goods = [];
  }
  return goods;
}
/**
 * 加入购物车
 * @param {*} id    产品id
 * @param {*} count 数量
 */
export function addToShopCart(id, count) {
  // 判断库存的操作, 略过
  const goods = getShopCart(); // 获取原有购物车中的数据
  // 查找当前id对应的商品在购物车数组中的索引
  const index = goods.findIndex(item => item.id === id);
  if (index > -1) {
    goods[index].count += count;
  } else {
    goods.push({
      id,
      count,
    });
  }
  // 设置cookies数据
  Cookies.set('shop_cart', JSON.stringify(goods), {
    expires: 365, // 有效期7天
    path: '/',  // 作用的路径,网站根目录
  });
}
export function cutShopCart(id,count){
    const goods = getShopCart();
    const index = goods.findIndex(item => item.id === id);
    goods[index].count -=count;
}
/**
 * 获取购物车中商品的数量
 */
export function countShopCart(){
  const goods = getShopCart(); // 获取购物车信息
  let count = 0;
  goods.forEach((item) => {
     count +=item.count;
  });
  console.log(count)
  return count;
}
/**
 * 删除商品数
 * @param {*} id    产品id
 */
export function removeGood(id) {
  const goods = getShopCart();
  const index = goods.findIndex(item => item.id === id)
  goods.splice(index, 1)
  // 设置cookies数据
  Cookies.set('shop_cart', JSON.stringify(goods), { // cookie只能存储字符串
    expires: 365, // 有效期7天
    path: '/', // 作用的路径，网站的根目录
  })
  return goods
}
