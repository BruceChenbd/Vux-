<template>
  <div class="orderlist">
     <group title="订单列表">
        <cell-box v-for="msg in list" :key="msg.id" class="cell" :is-link="true" :link="{name:'detailList'}">
           <div class="left">
             <span class="time">{{msg.date}}</span>
           </div>
           <div class="right">
             <span class="num">共{{msg.totalNum}}件</span>
             <span class="price">共{{msg.totalPrice}}元</span>
           </div>
        </cell-box>
     </group>
  </div>
</template>
<script>
  import { CellBox,Group,Cell} from 'vux'
  import {search} from '../service/search'
  import Cookies from 'js-cookie'
  export default{
      name: 'OrderList',
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
        var user = Cookies.get('user')
        search({
          user:user,
        }).then((res) => {
          console.log(res.data.data)
          this.list = res.data.data
        })
      },
      // filters:{
      //   date(value){
      //     console.log(value)
      //     var val =new Date(value);
      //     return val;
      //   }
      // }
  }

</script>
<style scoped>
.orderlist{
  margin-bottom:50px;
}
.cell{
  display: block;
  justify-content: space-between;
}
.left{
  width:100px;

}
.left .time{
font-size: 12px;
}
.right{
  width: 100px;
  font-size: 12px;
}
.right .num,.price{
  font-size: 12px;
}
</style>

