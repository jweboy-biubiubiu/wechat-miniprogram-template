<!--
 * @Author: jweboy
 * @Date: 2022-09-05 18:22:26
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 18:33:41
-->
<template>
  <view class="content">
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
    <u-row :gutter="8" customStyle="margin-bottom: 20rpx">
      <u-col :span="6">
        <commodity-item />
      </u-col>
      <u-col :span="6">
        <commodity-item />
      </u-col>
    </u-row>
  </view>
</template>

<script>
import CommodityItem from '@/components/CommodityItem'

export default {
  components: { CommodityItem },
  onLoad(options) {
    console.log(options)
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 0 16rpx;
}
</style>