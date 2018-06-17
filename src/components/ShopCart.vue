
<template>
  <div class="shop-cart">
     <group title="购物清单">
       <cell-box class="shop-cart-item" v-for="item in list" :key="item.id" :data-id="item.id">
         <div class="left">
             <img :src="item.goods.img" alt="" class="pic">
             <span class="title">{{item.goods.title}}</span>
         </div>
          <div class="right">
              <span class="price">{{item.goods.price*item.count}}</span>
              <span class="cut" @click="cut(item)">-</span>
              <span class="amount">{{item.count}}</span>
              <span class="add" @click="add(item)">+</span>
              <button @click="del(item)">删除</button>
          </div>
           <div class="clear"></div>
       </cell-box>
     </group>
     <div id="makeList">
         <button  @click="Sub()">提交({{totalNum}})</button>
         <span>合计：￥{{totalPrice}}</span>
     </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie';
import { Group, CellBox,XButton } from 'vux';
import { getShopCart,addToShopCart,removeGood} from '../utils/shop_cart';
import {getGoodsData,getDiscountData} from '../service/goods'
import $ from 'jquery'
export default {
  name: 'ShopCart',
  components:{
    Group,
    CellBox,
    XButton
  },
  data(){
    return {
      list: [] ,// 购物车中商品信息
    }
  },
  methods:{
    add(obj){
      addToShopCart(obj.id,1);
      this.$eventBus.$emit('addToShopCart',obj);
      this.init();
    },
    init(){
      this.list = [];
      let ShopCarts = getShopCart(); // 获取购物数据
      let allgoods = getGoodsData().concat(getDiscountData()); 
      // 获取所有的商品数据
      ShopCarts.forEach((item) => {
      let gItem = allgoods.find((g) => {
        return g.id == item.id;
      })
      console.log(gItem)
      let obj = {};
      obj.goods = gItem;
      obj.id = item.id;
      obj.count = item.count;
      this.list.push(obj);
      console.log(this.list)
     })
    },
    // 减少
    cut(obj){
      if(obj.count>0){
        addToShopCart(obj.id,-1);
        this.$eventBus.$emit('addToShopCart',obj);
        this.init();
      }
    },
    // 删除
    del(obj){
        var id = obj.id;
        removeGood(id);
        // this.$eventBus.$emit('addToShopCart',obj);
        this.init();
    },
    Sub(){
      if(this.totalNum != 0){
        var total = this.list;
        this.$router.push({
          name: 'Order',
          query:{
            totalNum:this.totalNum,
            totalPrice:this.totalPrice
          }
        })
      }
    }
  },
  computed:{
        totalNum(){
            var all = 0;
            this.list.forEach(function(item){
                all+=item.count;
            })
            return all;
        },
        totalPrice(){
            var all = 0;
            this.list.forEach(function(item){
                all+=item.count*item.goods.price;
            })
            return all;
        },
    },

  created(){
    this.init();
  },

};
</script>
<style scoped>
#makeList{
  width: 100%;
  position: fixed;
  bottom: 50px;
  height: 50px;
  border-top: 1px solid lightgray;
}
#makeList span{
  line-height: 50px;
  font-size: 12px;
  float: right;
  padding-right: 20px;
  text-align: right;
}
#makeList button{
  display: inline-block;
  height: 50px;
  float: right;
  line-height: 50px;
  font-size: 12px;
}
.clear{
  clear:both;
}
.shop-cart-item .left{
  width: 100px;
}
.shop-cart{
  margin-bottom: 100px;
}
.shop-cart-item .left .pic{
  width: 50px;
}
.shop-cart-item .left span{
  display: block;
}
.shop-cart-item .right .price {
  font-size: 14px;
  color: orangered;
}
.shop-cart-item .left .title{
  font-size: 12px;
}
.shop-cart-item .right .cut,.add{
  display: inline-block;
  width: 20px;
  height: 20px;;
  border-radius: 50%;
  font-size: 14px;
  line-height: 20px;
  background: green;
  text-align: center;
  cursor: pointer;
  color: white;
}
button {
  border:none;
  background: red;
  color:white;
  padding: 0 10px;
}
.shop-cart-item .right{
   width: 200px;
   display: flex;
   justify-content: space-between;
   float:right;
}
.shop-cart-item .right .amount{
  border:1px solid black;
  padding: 2px;
  font-size: 14px;
  color: white;
  background: #333;
}
</style>


