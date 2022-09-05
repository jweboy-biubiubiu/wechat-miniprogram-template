<!--
 * @Author: jweboy
 * @Date: 2022-09-04 23:56:33
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 17:44:42
-->
<template>
  <view>
    <status-bar title="清酒"/>
    <view class="container screen-view">
      <announcement />
      <view class="main">
        <swiper :list="swiper" />
        <filter />
        <u-row :gutter="8" customStyle="margin-bottom: 20rpx">
          <u-col :span="6">
            <commodity-item />
          </u-col>
          <u-col :span="6">
            <commodity-item />
          </u-col>
        </u-row>
        <u-row :gutter="8" customStyle="margin-bottom: 20rpx">
          <u-col :span="6">
            <commodity-item />
          </u-col>
          <u-col :span="6">
            <commodity-item />
          </u-col>
        </u-row>
      </view>
    </view>
  </view>
</template>

<script>
import Announcement from '@/components/Announcement'
import Swiper from '@/components/Swiper'
import CommodityItem from '@/components/CommodityItem'
import StatusBar from '@/components/StatusBar'
import Filter from './components/Filter'

export default {
  data() {
    return {
      swiper: [
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
      ],
    }
  },
  components: { Announcement, Swiper, CommodityItem, Filter, StatusBar },
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 128rpx;
  background-color: $uni-bg-color-grey;
  .main {
    padding: 0 16rpx;
  }
}
</style>