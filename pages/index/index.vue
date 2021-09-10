<template>
	<view class="index">
		<nav-bar title="智慧路灯平台" :icon="false"></nav-bar>
		<view class="scroll-view-box">
			<scroll-view scroll-y="true">
				<view class="index-search">
					<text class="iconfont icon-lingling"></text>
					<input placeholder="请输入名称" />
				</view>
				<view class="index-list">
					<view class="index-list-item">
						<view class="index-list-img">
							<image src="../../static/logo.png" mode=""></image>
							<text>亮灯数</text>
						</view>
						<view class="index-list-text">
							<view>设备001</view>
							<view>设备001</view>
							<view>设备001</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import NavBar from '../../components/navigation-bar/navigation-bar.vue'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.index-search{
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 50rpx 30rpx;
		background-color: #f7f7f7;
		border-radius: 50rpx;
		font-size: 26rpx;
		padding: 0 30rpx;
		&>text{
			font-size: 26rpx;
			margin-right: 20rpx;
		}
		&>input{
			font-size: 28rpx;
			flex: 1;
		}
	}
	.index-list{
		margin: 0 30rpx;
	}
	.index-list-item{
		display: flex;
		margin-bottom: 30rpx;
	}
	.index-list-img{
		width: 212rpx;
		height: 212rpx;
		position: relative;
		border-radius: 20rpx;
		overflow: hidden;
		margin-right: 20rpx;
	}
	.index-list-img image{
		width: 100%;
		height: 100%;
	}
	.index-list-img text{
		position: absolute;
		left: 12rpx;
		bottom: 12rpx;
		color: #fff;
		font-size: 20rpx;
	}
	.index-list-text{
		font-size: 24rpx;
		line-height: 66rpx;
	}
	
</style>
