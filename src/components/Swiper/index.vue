<!--
 * @Author: jweboy
 * @Date: 2022-09-05 00:28:18
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 00:28:22
-->
<template>
  <u-swiper
    :list="list1"
  />
</template>

<script>
export default {
  data() {
    return {
      list1: [
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
      ]
    }
  }
}
</script>