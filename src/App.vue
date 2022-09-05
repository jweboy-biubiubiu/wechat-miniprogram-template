<!--
 * @Author: jweboy
 * @Date: 2022-09-04 23:39:56
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 00:48:19
-->
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "@/styles/iconfont.css";

	/*每个页面公共css */
	.screen-view {
		height: 100vh;
	}
</style>
