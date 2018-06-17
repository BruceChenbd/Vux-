<template>
  <div class="update">
       <group label-width="5em" title="更改密码">
            <cell-box class="change">
                <h1>更改密码</h1>
            </cell-box>
            <x-input title="用户名" placeholder="请输入用户名" v-model="user" :required="true"></x-input>
            <x-input title="原始密码" type="password" placeholder="请输入原始密码" v-model="psw" :required="true" :min="6" :max="15"></x-input>
            <x-input title="新密码" type="password" placeholder="请输入新的密码" v-model="psw1" :required="true" :min="6" :max="15"></x-input>
            <x-input title="确认密码" type="password" placeholder="请确认新的密码" v-model="psw2" :required="true" :min="6" :max="15"></x-input>
            <cell>
                <router-link :to="{name:'Reg'}" class="login">没有帐号，我要注册</router-link>
            </cell>
            <x-button type="primary"  class="button" @click.native="changeSub()">提交</x-button>
        </group>
  </div>
</template>
<script>
import { CellBox, Group, XInput, Cell, XButton } from "vux";
import { update } from "../service/update";
export default {
  name: "Update",
  components: {
    CellBox,
    Group,
    XInput,
    Cell,
    XButton
  },
  data() {
    return {
      user: "",
      psw: "",
      psw1: "",
      psw2:"",
      disabled: false
    };
  },
  methods: {
    changeSub() {
      if (this.psw == "") {
        this.disabled = true;
        alert("请输入原始密码");
      }
      if (this.psw1 == "") {
        alert("请输入新密码");
      }
      if (this.psw2 == "") {
        alert("请确认新密码");
      }
      if (this.psw1 === this.psw2&&this.psw1!=''&&this.psw2!='') {
        update({
          user: this.user,
          psw: this.psw,
          psw1: this.psw1,
          psw2:this.psw2
        }).then(res => {
          console.log(res);
          if (res.data.msg == "修改成功") {
            this.$router.push({
              name: "Login"
            });
          }
        });
      }else{
        alert('两次输入密码不一致')
      }
    }
  }
};
</script>
<style scoped>
.change {
  height: 150px;
}
h1 {
  width: 100%;
  text-align: center;
}
.button {
  width: 90%;
  margin: 0 auto;
}
</style>


