<template>
    <div class="order">
        <group label-width="5em" title="提交订单">
            <cell-box class="sub">
                <h1>订单提交</h1>
            </cell-box>
            <x-input title="姓名" placeholder="请输入姓名" v-model="name" :required="true"></x-input>
            <x-input title="手机号"  placeholder="请输入手机号" v-model="phone" :required="true" :min="11" :max="11"></x-input>
            <x-input title="收货地址"  placeholder="请输入收货地址" v-model="address" :required="true"></x-input>
            <x-input title="备注"  placeholder="请输入信息" v-model="remark"></x-input>
            <x-button type="primary"  class="button" @click.native="sub()">提交订单</x-button>
        </group>
    </div>
</template>
<script>
    import { CellBox,Group,XInput,Cell,XButton } from 'vux'
    import { post} from '../utils/service'
    import { subOrder} from '../service/subOrder'
    import Cookies from 'js-cookie'
    export default{
        name:'order',
        data(){
            return{
                name:'',
                phone:'',
                address: '',
                remark: '',
                totalNum: '',
                totalPrice: ''
            }
        },
        components:{
            CellBox,
            Group,
            XInput,
            Cell,
            XButton
        },
        methods:{
          sub(){
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth();
            var day = now.getDate();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            var date = year+'年'+month+'月'+day+'日'+hour+'时'+minute+'分'+second+'秒'
            console.log(date)
            console.log('++++++++')
            var shopList = Cookies.get('shop_cart')
            console.log(shopList)
            var user = Cookies.get('user');
            console.log('--------')
            console.log(user)
            if(this.name!='' && this.phone!='' && this.address!=''){
                subOrder({
                 user:user,
                 userName:this.name,
                 phone:this.phone,
                 address:this.address,
                 mark:this.remark,
                 totalNum:this.totalNum,
                 totalPrice:this.totalPrice,
                 date:date
            }).then((res) => {
                Cookies.remove('shop_cart');
               
                console.log(res)
                this.$router.push({
                  name: 'OrderList'
                })
                 this.$router.go(0)
            })
            }
          }
        },
        created(){
           this.totalNum = this.$route.query.totalNum;
           this.totalPrice = this.$route.query.totalPrice
        }
    }
</script>
<style scoped>
.sub{
    height:100px;
}
.sub h1{
    margin:0 auto;
}
button{
  margin-top: 50px;
}
</style>





