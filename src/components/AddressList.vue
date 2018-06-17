<template>
  <div class="addressList">
    <group title="我的地址">
      <cell-box class="address" v-for="item in addressList" :key="item.id">
        <div class="userDetail">
          <span>{{item.name}}</span>
          <span>{{item.phone}}</span>
        </div>
        <div class="addressDetail">
          <span>{{item.address}}</span>
        </div>
        <div class="check">
          <div>
             <span class="default">{{item.defaultAddress | showDefault}}</span>
             <span class="del" @click="del(item._id)">删除</span>
             <span class="edit" @click="edit(item._id)">编辑</span>
          </div>
        </div>
      </cell-box> 
    </group>
    <cell-box>
          <x-button type="primary"  class="button" @click.native="addAddress()">添加新地址</x-button>
    </cell-box>
  </div>
</template>
<script>
import {CellBox,Group,XButton} from 'vux'
import {searchAddress} from '../service/searchAddress';
import {delAddress} from '../service/del'
import Cookies from 'js-cookie';
import $ from 'jquery';
export default {
  name:'AddressList',
  components:{
     CellBox,
     Group,
     XButton
  },
  data(){
      return {
          addressList:[],
          checked:false,
      }
  },
  methods:{
      addAddress(){
          this.$router.push({
            name:'Address'
          })
      },
      del(item){
           var id = item;
           delAddress({
             id,
           }).then((res)=>{
             this.init()
             console.log(res)
           })
      },
      edit(item){
           var id = item;
           this.$router.push({
             name:'editAddress',
             query:{
               id
             }
           })
      },
      init(){
       var user = Cookies.get('user');
        searchAddress({
            user:user
        }).then((res) =>{
            console.log(res.data.data+'2222')
            this.addressList = res.data.data;

        })
        }
  },
  filters:{
      showDefault:function(value){
        console.log(value+'0000')
        if(value == false){
           return  ''
        }else{
           value = '默认地址'
           return value
        }
      }
  },
  created(){
     this.init()
  }
}
</script>
<style scoped>
.address{
    display: flex;
    flex-direction: column;
}
.address .userDetail{
  font-family: '微软雅黑';
  font-size:16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.address .addressDetail{
  margin:5px 0 5px 0;
  font-family: '微软雅黑';
  font-size:14px;
  width: 100%;
}
.check{
  width: 100%;
  font-family: '微软雅黑';
  font-size:14px;
}
button{
  width: 90%;
  
  position: fixed;
  bottom: 53px;
}
.del,.edit{
  float: right;
  margin-right: 10px;
}
.default{
  color: orange;
}
</style>


