<template>
	<view class="music-head" :style="{color: color}">
		<view v-if="icon" class="music-head-icon">
			<text class="iconfont icon-right-copy" @tap="toBack()"></text>|
			<text class="iconfont icon-lingling" @click="toHome()"></text>
		</view>
		{{title}}
	</view>
</template>

<script>
	export default {
		props: ['title', 'icon','color'],
		data() {
			return {
				
			};
		},
		methods:{
			toBack(){
				uni.navigateBack()
			},
			toHome(){
				uni.navigateTo({
					url: "/pages/index/index"
				})
			}
		}
	}
</script>

<style scoped>
.music-head{
	height: 75px;
	font-size: 16px;
	line-height: 80px;
	text-align: center;
	z-index: 2;
	position: relative;
	/* color: #fff; */
}
.music-head-icon{
	position: absolute;
	left: 8px;
	top: 25px;
	width: 90px;
	height: 30px;
	background-color: rgba(0,0,0,0.5);
	color: #fff;
	line-height: 31px;
	border-radius: 15px;
	display: flex;
	justify-content: space-evenly;
	
}
</style>
