<!--
 * @Author: jweboy
 * @Date: 2022-09-05 18:06:12
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 18:20:27
-->
<template>
  <view class="wrapper">
    <text class="title">{{title}}</text>
    <text class="iconfont icon-arrow-right icon" />
  </view>
</template>

<script>
export default {
  props: {
    title: {
      default: '标题',
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 16rpx;
  padding: 32rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16rpx;
  background-color: $uni-bg-color;
  .title {
    color: $uni-text-color;
    font-size: 34rpx;
  }
  .icon {
    color: #bebebe;
    font-weight: 500;
    font-size: 42rpx;
  }
}
</style>