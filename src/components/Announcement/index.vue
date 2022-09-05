<!--
 * @Author: jweboy
 * @Date: 2022-09-05 00:05:10
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 17:01:47
-->
<template>
  <view class="">
    <view class="flex announcement">
      <view class="content truncate" @click="handleClick">公告：非常感谢各位用户对xxx的支持，近期下单的订单非常感谢各位用户对xxx的支持，近期下单的订单非常感谢各位用户对xxx的支持，近期下单的订单非常感谢各位用户对xxx的支持，近期下单的订单</view>
      <text class="iconfont icon-arrow-right icon" />
    </view>
    <u-popup :show="isShow" mode="bottom" :round="16" @close="handleClosePopup">
      <view class="wrapper">
        <text class="iconfont icon-arrow-down icon" @click="handleClosePopup" />
        非常感谢各位用户对xxx的支持，近期下单的订单非常感谢各位用户对xxx的支持，近期下单的订单非常感谢各位用户对xxx的支持，近期下单的订单非常感谢各位用户对xxx的支持，近期下单的订单
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    handleClick(){
      this.isShow = !this.isShow;
    },
    handleClosePopup() {
      this.isShow = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("~@/styles/mixins/truncate.scss");

.announcement {
  padding: 24rpx;
  color: $uni-text-color-grey;
  font-size: 24rpx;
  display: flex;
  align-items: center;
  .content {
    flex: 1;
  }
  .icon {
    font-size: 24rpx;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44rpx 24rpx  72rpx  24rpx;
  font-size: 28rpx;
  color: $uni-text-color-grey;
  .icon{
    margin-bottom: 36rpx;
    font-size: 36rpx;
    background-color: #f6f6f6;
    padding: 4rpx 16rpx;
    border-radius: 16rpx;
  }
}
</style>