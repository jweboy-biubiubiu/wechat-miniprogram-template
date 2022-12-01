<template>
  <view class="wrapper">
    <view class="card items-center">
      <u-avatar :src="user.avatar" :size="48" @click="handleAvatarClick" />
      <text class="username">{{ user.nickName }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'PersonCenter',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    handleAvatarClick() {
      wx.getUserProfile({
        desc: '用于完善会员资料',
        success: (res) => {
          const { userInfo } = res;
          console.log(userInfo);
          this.user = {
            avatar: userInfo.avatarUrl,
            nickName: userInfo.nickName,
          };
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: $uni-padding-md;
  .card {
    background-color: $uni-bg-color;
    padding: $uni-padding-lg;
    border-radius: $uni-border-radius-lg;
    .username {
      margin-left: $uni-margin-lg;
    }
  }
}
</style>
