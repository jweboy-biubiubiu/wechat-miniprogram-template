<!--
 * @Author: jweboy
 * @Date: 2022-09-05 16:22:20
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 16:45:30
-->
<template>
  <u-row customStyle="margin-bottom: 10px">
    <u-col :span="3" v-for="(item, index) in list" :key="item.value" data-key="item.value" @click="handleChange(index)">
      <view :class="{ item: true, active: activeIndex === index }">{{item.title}}</view>
    </u-col>
  </u-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      list: [
        { title: '默认', value: 'default' },
        { title: '新品', value: 'new' },
        { title: '销量', value: 'sales' },
        { title: '价格', value: 'price' },
      ]
    }
  },
  methods: {
    handleChange(index) {
      this.activeIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  text-align: center;
  font-size: 28rpx;
  height: 68rpx;
  line-height: 68rpx;
  font-weight: 500;
  color: $uni-text-color-grey;
  &.active {
    color: $uni-text-color;
  }
}
</style>