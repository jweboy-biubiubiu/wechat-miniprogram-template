<template>
  <view class="pay-bar items-center">
    <view class="flex-1 flex-between">
      <view class="action-list">
        <view class="item flex-column">
          <u-icon name="home" :size="24" />
          <text class="text">首页</text>
        </view>
        <view class="item flex-column">
          <u-icon name="kefu-ermai" :size="24" />
          <text class="text">客服</text>
        </view>
        <view class="item flex-column">
          <u-icon name="shopping-cart" :size="24" />
          <text class="text">购物袋</text>
        </view>
      </view>
      <viw class="add-btn">
        <text>加入购物袋</text>
      </viw>
    </view>
    <view class="btn-circle flex-full-center">
      <view class="pay-btn flex-full-center">
        <text>买～</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.pay-bar {
  background-color: $uni-bg-color;
  padding: $uni-padding-base;
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  height: 128rpx;
  padding-right: 200rpx;
  .action-list {
    display: flex;
    justify-content: space-around;
    width: 320rpx;
    .item {
      .text {
        font-size: $uni-font-size-xs;
      }
    }
  }
  .add-btn {
    width: 200rpx;
    height: 64rpx;
    text-align: center;
    line-height: 64rpx;
    display: block;
    background-color: #f7f7f7;
    color: $uni-color-primary;
    font-weight: $uni-font-weight-lg;
  }
  .btn-circle {
    position: absolute;
    top: -40rpx;
    right: 40rpx;
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    background-color: $uni-bg-color;
    .pay-btn {
      border-radius: 50%;
      width: 120rpx;
      height: 120rpx;
      background-color: $uni-color-primary;
      color: $uni-text-color-inverse;
    }
  }
}
</style>
