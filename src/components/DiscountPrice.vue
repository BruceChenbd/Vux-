<template>
  <div class="discount">
     <group title="折扣商品">
      <cell-box class="discount" v-for="item in list" :key="item.id">
        <div class="left">
          <img :src="item.img" class="pic" alt="图片">
        </div>
        <div class="right">
          <span class="title">{{item.title}}</span>
          <span class="desc">{{item.desc}}</span>
          <span class="price">¥<del>{{item.price}}</del></span>
          <span class="nowPrice">￥<i>{{item.nowPrice}}</i></span>
          <button @click="buy(item)" class="btn-buy">购买</button>
        </div>
        <div class="clear"></div>
      </cell-box>
    </group>
  </div>
</template>
<script>
import { Group, CellBox } from 'vux';
import {addToShopCart,getShopCart} from '../utils/shop_cart'
import {getDiscountData} from '../service/goods'
import Cookies from 'js-cookie'
export default {
  name: "DiscountPrice",
  components:{
    Group,
    CellBox,
  },
  data() {
    return {
        list:[]
    };
  },
   methods: {
    buy(item) {
      if(Cookies.get('user')){
        addToShopCart(item.id,1); // 加入购物车
      // this.$vux.toast.show({
      //   text: `id:${item.id},title:${item.title}`,
      // });
      // $emit派发事件
      //  参数一 事件类型
      //  参数二 事件传递的参数
        this.$eventBus.$emit('ToShopCart', item);
      }

    },
  },
  created(){
      getShopCart();
      this.list = getDiscountData();
  }
};
</script>
<style scoped>
.clear{
  clear: both;
}
.discount{
  display: block;
}
.discount .left{
  float: left;
}
.discount .right{
  width: 120px;
  float: right;
  margin-left: 4rem;
}
.discount .pic{
  display: block;
  width:100px;
  max-height: 200px;
  margin: 20px auto;
}
.discount span{
  display: block;
}
.discount .title{
  color: #333;
  font-size: 14px;
}
.discount .desc{
  color: #9a9a9a;
  font-size: 12px;
}
.discount .price{
  color: #666;
  font-size: 1rem;
}
.discount .nowPrice{
  color: #ff3300;
}
.discount .btn-buy{
  border:1px solid gray;
  border-radius: 4px;
  display: block;
  margin: 0.8rem 0;
  background-color: #09BB07;
  color: #fff;
  padding: 0.5rem 2rem;
}
.home{
  margin-bottom:50px;
}
</style>


