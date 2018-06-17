import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Home from '../components/Home';
import ShopCart from '../components/ShopCart';
import Login from '../components/Login';
import Reg from '../components/Reg';
import UserInfo from '../components/UserInfo';
import Update from '../components/Update';
import Order from '../components/Order';
import OrderList from '../components/OrderList';
import detailList from '../components/detailList';
import DiscountPrice from '../components/DiscountPrice';
import Address from '../components/Address';
import AddressList from '../components/AddressList';
import editAddress from '../components/editAddress';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/shop_cart',
      name: 'ShopCart',
      component: ShopCart,
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/reg',
      name: 'Reg',
      component: Reg,
    }, {
      path: '/user_info',
      name: 'UserInfo',
      component: UserInfo,
    }, {
      path: '/update',
      name: 'Update',
      component: Update
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: 'orderlist',
      name: 'OrderList',
      component: OrderList
    }, {
      path: 'detaillist',
      name: 'detailList',
      component: detailList
    },{
      path:'discountprice',
      name:'DiscountPrice',
      component:DiscountPrice
    },{
      path:'address',
      name:'Address',
      component:Address
    },{
      path:'addressList',
      name:'AddressList',
      component:AddressList
    },{
      path:'editAddress',
      name:'editAddress',
      component:editAddress
    }
  ],
});
