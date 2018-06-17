// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import { ToastPlugin } from 'vux';
import App from './App';
import router from './router';
import ElemenmtUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 创建一个空白的vue实例用来当作事件总线控制传值
//  实现非父子组件之间传值
const eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;

FastClick.attach(document.body);
Vue.use(ToastPlugin);
Vue.use(ElemenmtUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app-box');
