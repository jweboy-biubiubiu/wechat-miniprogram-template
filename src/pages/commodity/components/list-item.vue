<template>
  <view
    :class="['list-item', 'flex', extra ? 'items-start' : 'items-center']"
    @tap="handleClick"
  >
    <text class="title">{{ title }}</text>
    <view class="flex-between flex-1">
      <view class="flex-column">
        <text class="content">{{ content }}</text>
        <text v-if="extra" class="extra">{{ extra }}</text>
      </view>
      <u-icon v-if="!readonly" name="arrow-right" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: { default: '标题', type: String },
    content: { default: '内容', type: String },
    extra: { default: '', type: String },
    readonly: { default: true, type: Boolean },
  },
  methods: {
    handleClick() {
      this.$$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  padding-top: $uni-padding-md;
  padding-bottom: $uni-padding-md;
  .title {
    color: $uni-text-color-grey;
    margin-right: $uni-margin-md;
    font-size: $uni-font-size-base;
  }
  .extra {
    color: $uni-text-color-light-grey;
    font-size: $uni-font-size-sm;
  }
}
</style>
