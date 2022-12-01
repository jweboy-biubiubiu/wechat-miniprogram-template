<!--
 * @Author: jweboy
 * @Date: 2022-09-05 15:46:49
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 16:51:57
-->
<template>
  <view class="wrapper" @tap="handleClick">
    <u-image
      :show-loading="true"
      :src="data.thumbnail"
      width="100%"
      height="320rpx"
    />
    <view class="main">
      <view class="title">16度无觅清酒-墨标-纯米大吟酿720ml</view>
      <view class="content">
        <text class="highlight">¥388</text>
        <text class="extra">130人看过</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        thumbnail: 'https://cdn.uviewui.com/uview/album/1.jpg',
      }),
    },
  },
  methods: {
    handleClick() {
      this.$emit('click', this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: $uni-bg-color;
  border-radius: 16rpx;
  overflow: hidden;
  .main {
    padding: 28rpx;
    .title {
      margin-bottom: 16rpx;
      font-size: 28rpx;
      color: $uni-text-color;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .highlight {
      font-size: 34rpx;
      color: $uni-color-primary;
    }
    .extra {
      font-size: 24rpx;
      color: $uni-text-color-light-grey;
    }
  }
}
</style>
