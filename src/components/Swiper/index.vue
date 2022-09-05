<!--
 * @Author: jweboy
 * @Date: 2022-09-05 00:28:18
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 15:41:39
-->
<template>
  <u-swiper class="swiper" :list="list" :interval="60000" :circular="true" />
</template>

<script>
export default {
  props: {
    list: {
      default: () => [],
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 300rpx;
}
</style>