<!--
 * @Author: jweboy
 * @Date: 2022-09-04 23:56:33
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 01:12:16
-->
<template>
  <view class="container screen-view">
    <announcement />
    <view class="main">
      <swiper />
    </view>
   <u-button type="primary" text="确定"></u-button>
  </view>
</template>

<script>
import Announcement from '@/components/Announcement'
import Swiper from '@/components/Swiper'

export default {
  components: { Announcement, Swiper },
  mounted() {
    console.log(uni.$u.config)
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #EDEDED;
  // padding: 24rpx;
}
</style>