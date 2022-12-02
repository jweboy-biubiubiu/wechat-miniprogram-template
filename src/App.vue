<!--
 * @Author: jweboy
 * @Date: 2022-09-04 23:39:56
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 18:13:05
-->
<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
    // #ifdef MP-WEIXIN
    uni.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline'],
    });
    // #endif
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import '@/uni_modules/uview-ui/index.scss';
@import '@/styles/iconfont.css';
@import '@/styles/mixins/layout.scss';

/*每个页面公共css */
.screen-view {
  height: 100vh;
}
.tabbar-view {
  padding-top: 138rpx;
  height: 100vh;
}
page {
  background-color: #ededed;
  color: #333;
}
view {
  box-sizing: border-box;
}
</style>
