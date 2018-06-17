<template>
    <div class="Login">
        <group label-width="5em" title="注册">
            <cell-box class="register">
                <h1>注册</h1>
            </cell-box>
            <x-input title="账号" placeholder="请输入用户名" v-model="user" :required="true"></x-input>
            <x-input title="密码" type="password" placeholder="请输入密码" v-model="psw" :required="true" :min="6" :max="15"></x-input>
            <x-input title="确认密码" type="password" placeholder="请确认密码" v-model="psw1"  :required="true"></x-input>
            <cell>
                <router-link :to="{name:'Login'}" class="login">已有账号，我要登录</router-link>
            </cell>
            <x-button type="primary" action-type="button" class="button" @click.native="registSub()">注册</x-button>
        </group>
    </div>
</template>
<script>
import { CellBox, Group, XInput, Cell, XButton } from "vux";
import { regist } from "../service/regist";
import $ from "jquery";
export default {
  name: "login",
  data() {
    return {
      user: "",
      psw: "",
      psw1: ""
    };
  },
  components: {
    CellBox,
    Group,
    XInput,
    Cell,
    XButton
  },
  methods: {
    registSub() {
      if (this.user === "") {
        alert("用户名不能为空");
        return;
      }
      if (this.psw === "") {
        alert("密码不能为空");
        return;
      }
      if (this.psw != this.psw1) {
        alert("两次输入的密码不一致");
      }
      if (this.psw === this.psw1) {
        regist({
          user: this.user,
          psw: this.psw
        }).then(res => {
          console.log(res);
          if (res.data.msg == "注册成功") {
            alert(res.data.msg);
            this.$router.push({
              name: "Login"
            });
          } else {
            alert(res.data.msg);
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.register {
  height: 150px;
}
.register h1 {
  display: block;
  margin: 0 auto;
}
.login {
  color: lightskyblue;
}
.button {
  width: 90%;
  margin: 0 auto;
}
</style>

