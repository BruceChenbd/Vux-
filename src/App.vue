<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox">
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item :link="{name: 'Home'}">
          <x-icon slot="icon" type="ios-home"></x-icon>
          <span slot="label">首页</span>
        </tabbar-item>
        <!--
          badge值为一个字符串,通过为数字添加""转换为字符串
         -->
         <tabbar-item :link="{name: 'DiscountPrice'}">
          <x-icon slot="icon" type="ios-people"></x-icon>
          <span slot="label">聚划算</span>
        </tabbar-item>
        <tabbar-item :badge='badge | showShopCart' :link="{name: 'ShopCart'}">
          <x-icon slot="icon" type="ios-cart"></x-icon>
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item @click.native="point()">
          <x-icon slot="icon" type="ios-person"></x-icon>
          <span slot="label">个人中心</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, ViewBox } from 'vux';
import { countShopCart} from './utils/shop_cart';
import Cookies from 'js-cookie';

export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    ViewBox,
  },
  data() {
    return {
      badge: 0,
    };
  },
  methods:{
     point(){
       if(Cookies.get('user')){
         this.$router.push({
            name: 'UserInfo'
         })
       }else{
         this.$router.push({
            name: 'Login'
         })
       }
     }
  },
  created() {
    // 添加事件监听
    this.$eventBus.$on('ToShopCart', (data) => {
      this.badge += 1;
    });
    this.badge = countShopCart();
  },
  filters:{
    showShopCart(count){ // 过滤器用于处理购物车中商品数量的显示
      let str = '';
      if(count>0){
        str = count + '';
      }
      return str;
    }
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
body {
  background-color: #fbf9fe;
}
// 设置tabbar选中之后xicon的填充内容
.weui-bar__item_on .vux-x-icon{
  fill: #1aad19;
}
.weui-tabbar__item{
  background: #f7f7fa;
}
</style>
