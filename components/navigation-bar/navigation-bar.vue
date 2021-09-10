<template>
	<view class="music-head">
		<view class="music-head-icon">
			<text class="iconfont icon-right-copy"></text>|
			<text class="iconfont icon-lingling"></text>
		</view>
		{{title}}
	</view>
</template>

<script>
	export default {
		props: ['title'],
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.music-head{
	height: 75px;
	font-size: 16px;
	line-height: 80px;
	text-align: center;
	
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
