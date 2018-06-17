<template>
  <div class="detaillist">
        <group title="订单详情">
        <cell-box v-for="msg in list" :key="msg.id" class="cell">
          <div>收货人：{{msg.userName}}</div>
          <div>手机号：{{msg.phone}}</div>
          <div>商品总价格：{{msg.totalPrice}}</div>
          <div>商品总数：{{msg.totalNum}}</div>
          <div>收货地址：{{msg.address}}</div>
          <div>下单时间：{{msg.date}}</div>
        </cell-box>
     </group>
  </div>
</template>
<script>
import {CellBox,Group,Cell} from 'vux'
import {search} from '../service/search'
import Cookies from 'js-cookie'
  export default{
    name: 'detailList',
      components:{
        CellBox,
        Group,
        Cell
      },
    data(){
      return {
         list:[]
      }
    },
    created(){
      var user = Cookies.get('user');
      search({
        user:user
      }).then((res) =>{
        console.log(res)
        this.list = res.data.data;
        console.log()
      })
    }
  }
</script>
<style scoped>
.detaillist{
  margin-bottom: 50px;
}
.vux-cell-box{
  flex-direction: column;
}
.vux-cell-box div{
  width: 100%;
  text-align: left;
}
</style>

