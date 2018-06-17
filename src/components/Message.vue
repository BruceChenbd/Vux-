<template>
    <div class="message">
        <group label-width="5em" title="提交订单">
            <cell-box class="sub">
                <h1>订单提交</h1>
            </cell-box>
            <x-input title="姓名" placeholder="请输入姓名" v-model="name"></x-input>
            <x-input title="手机号"  placeholder="请输入手机号" v-model="phone"></x-input>
            <x-input title="收货地址"  placeholder="请输入收货地址" v-model="address"></x-input>
            <x-input title="备注"  placeholder="请输入信息" v-model="remark"></x-input>
            <x-button type="primary"  class="button" @click.native="sub()">提交订单</x-button>
        </group>
    </div>
</template>
<script>
    import { CellBox,Group,XInput,Cell,XButton } from 'vux'
    import { post} from '../utils/service'
    import { login} from '../service/login'
    import Cookies from 'js-cookie'
    export default{
        name:'login',
        data(){
            return{
                name:'',
                psw:''
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
           loginSub(){
            if(this.user === ''){
                alert('用户名不能为空')
                return;
            }
            if(this.psw === ''){
                alert('密码不能为空')
                return;
            }
            login({
                user:this.user,
                psw:this.psw,
                }).then((res)=>{
                console.log(res)
                if(res.data.msg == '登录成功'){
                  Cookies.set('user',this.user)
                  this.$router.push({
                     name: 'UserInfo'
                })
                }
            })
            },
        }
    }
</script>
<style scoped>
.register{
    height:150px;
}
.register h1{
    margin:0 auto;
}
.login{
    color:lightskyblue;
}
</style>




