<template>
 <div  class="userinfo">
    <group title="个人中心">
       <el-upload
        class="avatar-uploader"
        action="http://localhost:3000/api/v1/product_type/upload"
        :show-file-list="false"
        :with-credentials="false"
        :data="upload"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="点此上传头像">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <cell-box>
        <div>
           <h2 v-text="user"></h2>
        </div>
      </cell-box>
      <cell-box is-link :link="{name:'AddressList'}">
        我的收货地址
      </cell-box>
      <cell-box is-link :link="{name: 'OrderList'}">
        我的订单
      </cell-box>
      <cell-box is-link :link="{name:'Update'}">
        修改密码
      </cell-box>
      <cell-box></cell-box>
      <x-button type="primary" class="btn" @click.native="quit()" style="width:90%;margin:0 auto;">退出登录</x-button>
    </group>
 </div>
</template>
<script>
import { Group, CellBox,XButton } from 'vux';
import Cookies from 'js-cookie';
import router from 'vue-router'
export default {
  name: 'UserInfo',
  components:{
    Group,
    CellBox,
    XButton,
  },
  data(){
    return {
     imageUrl:'',
     user:'',
     upload:{
       userName:'',
     }
    }

  },
  methods:{
      quit(){
      Cookies.remove('user')
      Cookies.remove('shop_cart')
      this.$router.go(0)
      this.$router.push({
        name: 'Login',
      })
     },
      handleAvatarSuccess(res, file) {
        console.log(res+'1111')
        this.imageUrl = '../../shop-app-server/public/'+res+''
        console.log(this.imageUrl)
        this.$router.go(0)
      },
      beforeAvatarUpload(file) {
        //  console.log(this.user)
        this.upload.userName = this.user;
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
  created(){
    console.log(this.isUpload)
    var user = Cookies.get('user');
    console.log(user)
    this.user = user;
    this.imageUrl = '../../shop-app-server/public/allHeaders/'+user+'.jpg'
  }
}
</script>
<style scoped>
.avatar-uploader{
  display: flex;
  justify-content: center;
}
.el-upload--text{
  border-radius: 50%; 
}
.el-upload--text img{
  color: orangered;
  display: flex;
  border-radius: 50%;
}
.el-upload__input{
  display: inline-block;
}
.userinfo{
  margin-bottom:50px;
}
.message{
  width: 80%;
  margin: 0 auto;
}
.message div {
  width: 100%;
  height: 100%;
}
.btn{
  margin: 20px 0;
}
.vux-cell-box div{
  width: 100%;
  display: flex;
  justify-content: center;
}
h2{
  width: 100%;
  text-align: center;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>


