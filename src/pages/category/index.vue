<!--
 * @Author: jweboy
 * @Date: 2022-09-04 23:39:56
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 18:36:00
-->
<template>
	<view>
		<status-bar title="分类" :logo="false" />
		<view class="tabbar-view">
			<div class="content" @click="handleCardClick">
				<card-cell  title="个人设置" data-key="a" />
				<card-cell  title="会员等级" data-key="b" />
			</div>
		</view>
	</view>
</template>

<script>
import StatusBar from '@/components/StatusBar'
import CardCell from '@/components/CardCell'
import { serializateUrlWithQuery } from '@/utils'

export default {
	data() {
		return {
		}
	},
	components: { StatusBar, CardCell },
	onLoad() {

	},
	methods: {
		handleCardClick(evt) {
			const { dataset } = evt.target;
			const url = serializateUrlWithQuery('/pages/search/index', dataset)
			uni.navigateTo({ url });
		}
	}
}
</script>

<style scoped>
.content {
	padding: 16rpx;
}
</style>

