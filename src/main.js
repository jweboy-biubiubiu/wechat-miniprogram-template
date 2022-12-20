/*
 * @Author: jweboy
 * @Date: 2022-09-04 23:39:56
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 15:39:11
 */
import Vue from 'vue';
import uView from '@/uni_modules/uview-ui';
import App from './App';
import { request } from '@/utils/request';

Vue.config.productionTip = false;
Vue.prototype.$request = request;

Vue.use(uView);

uni.$u.setConfig({
  // 修改$u.config对象的属性
  config: {
    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
    // unit: 'rpx',
  },
});

App.mpType = 'app';

const app = new Vue({
  ...App,
});
app.$mount();
