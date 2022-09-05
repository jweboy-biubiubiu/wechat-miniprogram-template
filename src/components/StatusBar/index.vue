<!--
 * @Author: jweboy
 * @Date: 2022-09-05 17:10:29
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 17:29:24
-->
<template>
  <view class="status-bar">
    <view class="content">
      <u-avatar src="https://avatars.githubusercontent.com/u/16516645?v=4" :size="24" />
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      default: '标题',
    },
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.status-bar {
  position: fixed;
  z-index: 100;
  height: 148rpx;
  width: 100%;
  background-color: $uni-bg-color-grey;
  .content {
    position: absolute;
    left: 16rpx;
    bottom: 16rpx;
    display: flex;
  }
  .title {
    margin-left: 24rpx;
  }
}
</style>