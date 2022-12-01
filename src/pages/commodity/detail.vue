<template>
  <view>
    <u-swiper :list="swiperList" height="800rpx" />
    <view class="info">
      <view class="flex-between">
        <text class="price">¥388</text>
        <text class="extra">130人看过</text>
      </view>
      <view class="flex-between name">
        <text class="title flex-1"
          >日本奥飞驒初绿纯米生原酒清酒绿标岐阜县奥飞弹300年</text
        >
        <div class="flex-column">
          <u-icon name="share-square" :size="24" />
          <text class="text">分享</text>
        </div>
      </view>
      <u-line />
      <list-item
        title="发货"
        content="快递包邮江苏省发货"
        extra="付款后十四天内发货"
      />
      <u-line />
      <list-item title="选择" content="已选720ml单瓶装" :readonly="false" />
      <u-line />
      <view class="goods-title">商品详情</view>
    </view>
    <view>
      <view>
        <rich-text :nodes="detailItems" />
      </view>
    </view>
  </view>
</template>

<script>
import ListItem from './components/ListItem';

export default {
  name: 'CommodityDetail',
  components: { ListItem },
  data() {
    return {
      swiperList: [
        'https://cdn.jweboy.com/marketing/test/O1CN01NFqqVM2BA4wfSvWXw_%21%212214829668297.jpeg',
        'https://cdn.jweboy.com/marketing/test/O1CN018eyjcZ2BA4wUeZwzJ_%21%212214829668297.jpeg',
      ],
      detailItems: [
        'https://cdn.jweboy.com/marketing/test/O1CN018eyjcZ2BA4wUeZwzJ_%21%212214829668297.jpeg',
        'https://cdn.jweboy.com/marketing/test/O1CN01fdTfG02BA4wd0vojB_%21%212214829668297.jpeg',
        'https://cdn.jweboy.com/marketing/test/O1CN019QJRDr2BA4weExOKE_%21%212214829668297.jpeg',
        'https://cdn.jweboy.com/marketing/test/O1CN01rNQDi12BA4wXjkXW3_%21%212214829668297.jpeg',
      ],
    };
  },
  onLoad() {
    this.detailItems = this.detailItems.map((item) => ({
      name: 'img',
      attrs: { src: item, width: '100%' },
    }));
  },
};
</script>

<style lang="scss" scoped>
.info {
  padding: $uni-padding-md;
  background-color: $uni-bg-color;
  .price {
    font-size: $uni-font-size-xxl;
    font-weight: $uni-font-weight-md;
    color: $uni-color-primary;
  }
  .extra {
    font-size: $uni-font-size-sm;
    color: $uni-text-color-light-grey;
  }
  .title {
    margin-top: $uni-margin-md;
    font-size: $uni-font-size-xl;
    margin-right: $uni-margin-md;
  }
  .text {
    font-size: $uni-font-size-sm;
  }
  .name {
    margin-bottom: $uni-margin-md;
  }
  .goods-title {
    padding-top: $uni-padding-base;
    font-weight: $uni-font-weight-md;
    font-size: $uni-font-size-lg;
  }
}
</style>
