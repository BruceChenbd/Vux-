<template>
  <div class="editAddress">
  <group title="我的地址">
    <x-input title="姓名"  v-model="name"></x-input>
    <x-input title="手机"  v-model="phone"></x-input>
    <x-address :title="title" @on-hide="logHide" v-model="provinceList" :list="addressData" placeholder="请选择地址">
      <template slot="title" slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
        <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
          <span style="vertical-align:middle;">请选择地址</span>
        </span>
      </template>
    </x-address>
     <x-textarea title="详细地址" v-model="detailAddress"></x-textarea>
  </group>
  <group>
    <x-switch title="设为默认地址" v-model="defaultAddress"></x-switch>
  </group>
  <x-button mini @click.native="SaveAddress">保存</x-button>
  </div>
</template>
<script>
import {Group, XAddress, ChinaAddressV4Data,XTextarea,XButton,XSwitch,XInput,Value2nameFilter as value2name } from 'vux';
import {updateAddress} from '../service/updateAddress';
import Cookies from 'js-cookie';
import {editAddress} from '../service/eidt'
export default {
  name:'Address',
  components:{
      Group,
      XAddress,
      ChinaAddressV4Data,
      XTextarea,
      XButton,
      XSwitch,
      XInput,
  },
  data(){
      return {
          title:'请选择地址',
          provinceList:[],
          detailAddress:'',
          name:'',
          phone:'',
          address:'',
          id:'',
          defaultAddress:false,
          addressData:ChinaAddressV4Data,
      }
  },
  methods:{
       logHide (str) {
         console.log('on-hide', str)
       },
       getName(value){
         return value2name(value, ChinaAddressV4Data)
       },
       SaveAddress(){
         var x = this.getName(this.provinceList,ChinaAddressV4Data)
         var address = x+' '+this.detailAddress;
         if(this.name!=''&&this.phone!=''&&this.provinceList!=''&&this.detailAddress!=''){
            updateAddress({
                _id:this.id,
                name:this.name,
                phone:this.phone,
                address:address,
                defaultAddress:this.defaultAddress
            }).then((res) =>{
                
            })
            this.$router.push({
                   name:'AddressList'
             })
         }else{
             alert('请填写完整信息！')
         }
         
       }
  },
  created(){
     var id = this.$route.query.id;
     this.id = id;
     console.log(id)
     editAddress({
         id,
     }).then((res)=>{
         var obj = res.data.data[0];
         this.name = obj.name;
         this.phone = obj.phone;
         this.detailAddress = obj.address;
     })
  }
}
</script>
<style  scoped>
  button{
      float: right;
  }
</style>



