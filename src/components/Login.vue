<template>
    <div class="Login">
        <group label-width="5em" title="注册">
            <cell-box class="register">
                <h1>登录</h1>
            </cell-box>
            <x-input title="账号" placeholder="请输入用户名" v-model="user" :required="true"></x-input>
            <x-input title="密码" type="password" placeholder="请输入密码" v-model="psw" :required="true"></x-input>
            <cell>
                <router-link :to="{name:'Reg'}" class="login">没有帐号，我要注册</router-link>
            </cell>
            <x-button type="primary"  class="button" @click.native="loginSub()">登录</x-button>
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
                user:'',
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
                if(res.data.msg == '登录失败'){
                    alert('密码错误！')
                }
                if(res.data.msg == '查找失败'){
                    alert('暂无用户信息，请先注册！')
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
.button{
    width: 90%;
    margin: 0 auto;
}
</style>




