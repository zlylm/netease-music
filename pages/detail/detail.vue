<template>
	<view class="detail">
		<nav-bar title="歌单详情" :icon="true" color="#fff"></nav-bar>
		<view class="fixbg" :style="{backgroundImage:`url(/static/logo.png)`}"></view>
		<view class="scroll-view-box">
			<scroll-view scroll-y="true">
				<view class="detail-play">
					<image src="../../static/logo.png"></image>
					<text class="iconfont icon-play"></text>
					<view class=""></view>
				</view>
				<view class="detail-lyric">
					<view class="detail-lyric-warp">
						<view class="detail-lyric-item">
							测试文字测试文字测试文字
						</view>
						<view class="detail-lyric-item active">
							测试文字测试文字测试文字
						</view>
						<view class="detail-lyric-item">
							测试文字测试文字测试文字
						</view>
					</view>
				</view>
				<view class="detail-like">
					<view class="detail-like-head">
						喜欢这首歌的人也听
					</view>
					<view class="detail-like-item">
						<view class="detail-like-img">
							<image src="../../static/logo.png"></image>
						</view>
						<view class="detail-like-song">
							<view>兰</view>
							<view>
								<image src="../../static/dujia.png"></image>
								<image src="../../static/dujia.png"></image>
								<text>哈哈哈</text>
							</view>							
						</view>
						<text class="iconfont icon-dianzan"></text>
					</view>
				</view>
				<view class="detail-comment">
					<view class="detail-comment-head">
						精彩评论
					</view>
					<view class="detail-comment-item">
						<view class="detail-comment-img">
							<image src="../../static/logo.png"></image>
						</view>
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class="detail-comment-name">
									<view>是666</view>
									<view>2020-01-02</view>
								</view>
								<view class="detail-comment-like">
									2022
									<text class="iconfont icon-dianzan"></text>
								</view>
							</view>
							<view class="detail-comment-text">
								测试赛所所所所所所
							</view>
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
				
			}
		},
		onLoad(options){
			console.log(options)
		},
		methods: {
			
		}
	}
</script>

<style scoped>
@import url("detail.css");
</style>
