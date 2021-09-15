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
					<view 
						class="index-list-item" 
						v-for="(item, index) in topList" 
						:key="item.coverImgUrl"
						@tap="toList(item.id)"
					>
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="index-list-text">
							<view v-for="(list, idx) in item.tracks" :key="list.first">{{list.first}} - {{list.second}}</view>
						</view>
					</view>
					
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import NavBar from '../../components/navigation-bar/navigation-bar.vue'
	import { topList } from '../../common/api.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				topList: []
			}
		},
		onLoad() {
			topList().then(res => {
				let result = res.data.list
				result.length = 4
				this.topList = result
				console.log(result)
			})
		},
		methods: {
			toList(listId){
				uni.navigateTo({
					url: '/pages/list/list?listId=' + listId
				})
			}
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
		flex: 1;
		font-size: 24rpx;
		line-height: 70rpx;
	}
	.index-list-text view{
		width: 460rpx;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	
</style>
