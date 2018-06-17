<template>
  <div class="home">
    <group title="商品列表">
      <span class="header">久久头条</span>
      <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
        <swiper-item><p>包邮区控养的多肉，没有最萌，只有更萌</p></swiper-item>
        <swiper-item><p>为什么纳智捷让二手车贩子都感到害怕？</p></swiper-item>
        <swiper-item><p>79平北欧二房，软装搭配的美感与钱无关</p></swiper-item>
        <swiper-item><p>59平两室一厅，厨房做成开放式大了很多</p></swiper-item>
        <swiper-item><p>这三件衣服最显腿短腿粗，看看你有没有</p></swiper-item>
        <swiper-item><p>男生25岁之前还想再长高，需要做什么？</p></swiper-item>
     </swiper>
       <divider>久久商城给各位用户拜年啦！</divider>
       <swiper loop auto :list="demo06_list"  style="width:100%;"></swiper>
       <div class="clear"></div>
      <cell-box class="goods-item" v-for="item in goods" :key="item.id">
        <div class="left">
          <img :src="item.img" class="pic" alt="图片">
        </div>
        <div class="right">
          <span class="title">{{item.title}}</span>
          <span class="desc">{{item.desc}}</span>
          <span class="price">¥<i>{{item.price}}</i>元</span>
          <button @click="buy(item)" class="btn-buy">购买</button>
        </div>
        <div class="clear"></div>
      </cell-box>
    </group>
  </div>
</template>
<script>
import { Group, CellBox, Swiper, SwiperItem, Divider } from "vux";
import { addToShopCart, getShopCart } from "../utils/shop_cart";
import { getGoodsData } from "../service/goods";
import Cookies from "js-cookie";
// 轮播图列表
const baseList = [
  {
    url: "javascript:",
    img: "https://static.vux.li/demo/1.jpg",
    title: "送你一朵fua"
  },
  {
    url: "javascript:",
    img: "https://static.vux.li/demo/2.jpg",
    title: "送你一辆车"
  },
  {
    url: "javascript:",
    img: "https://static.vux.li/demo/5.jpg",
    title: "送你一次旅行",
    fallbackImg: "https://static.vux.li/demo/3.jpg"
  }
];

const urlList = baseList.map((item, index) => ({
  url: "http://m.baidu.com",
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `${item.title}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    `
}));
export default {
  name: "Home",
  components: {
    Group,
    CellBox,
    Swiper,
    SwiperItem,
    Divider
  },
  data() {
    return {
      goods: [],
      demo06_list: urlList
    };
  },
  methods: {
    buy(item) {
      if (Cookies.get("user")) {
        addToShopCart(item.id, 1); // 加入购物车
        // this.$vux.toast.show({
        //   text: `id:${item.id},title:${item.title}`,
        // });
        // $emit派发事件
        //  参数一 事件类型
        //  参数二 事件传递的参数
        this.$eventBus.$emit("ToShopCart", item);
      }
    }
  },
  created() {
    getShopCart();
    this.goods = getGoodsData();
  }
};
</script>
<style scoped>
.swiper-demo-img img {
  width: 100%;
}
.header {
  font-size: 14px;
  color: orangered;
  line-height: 28px;
}
.vux-slider {
  width: 80%;
  font-size: 14px;
  text-align: center;
  float: right;
  line-height: 28px;
}
.clear {
  clear: both;
}
.goods-item {
  display: block;
}
.goods-item .left {
  float: left;
}
.goods-item .right {
  width: 120px;
  float: right;
  margin-left: 4rem;
}
.goods-item .pic {
  display: block;
  width: 100px;
  max-height: 200px;
  margin: 20px auto;
}
.goods-item span {
  display: block;
}
.goods-item .title {
  color: #333;
  font-size: 1.2rem;
}
.goods-item .desc {
  color: #9a9a9a;
  font-size: 0.8rem;
}
.goods-item .price {
  color: #666;
  font-size: 1rem;
}
.goods-item .price i {
  color: #ff3300;
}
.goods-item .btn-buy {
  border: 1px solid gray;
  border-radius: 4px;
  display: block;
  margin: 0.8rem 0;
  background-color: #09bb07;
  color: #fff;
  padding: 0.5rem 2rem;
}
</style>


