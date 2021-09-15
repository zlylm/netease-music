<template>
	<view class="list">
		<nav-bar title="歌单详情" :icon="true" color="#fff"></nav-bar>
		<view class="fixbg" :style="{backgroundImage:`url(${playlist.coverImgUrl})`}"></view>
		<view class="scroll-view-box">
			<scroll-view scroll-y="true">
				<view class="list-head">
					<view class="list-head-img">
						<image :src="playlist.coverImgUrl" mode=""></image>
						<text class="iconfont icon-dianzan">{{playlist.playCount | formatCount}}</text>
						
					</view>
					<view class="list-head-text">
						<view class="">{{playlist.name}}</view>
						<view class="">
							<image :src="playlist.creator.avatarUrl" mode=""></image>
							{{playlist.creator.nickname}}
						</view>
						<view class="">{{playlist.description}}</view>
					</view>
				</view>
				<!-- #ifdef MP-WEIXIN -->
					<button class="list-share" open-type="share">
						<text class="iconfont icon-dianzan"></text> 
						分享给微信好友
					</button>
				<!-- #endif -->
				
				<view class="list-music">
					<view class="list-music-head">
						<text class="iconfont icon-dianzan"></text>
						<text>播放全部</text>
						<text>(共{{playlist.trackCount}}首)</text>
					</view>
					<!-- <view class="list-music-item">
						<view class="list-music-top">
							1
						</view>
						<view class="list-music-song">
							<view>与我无关</view>
							<view>
								<image src="../../static/dujia.png"></image>
								<image src="../../static/dujia.png"></image>
								歌手 - 歌曲名字
							</view>
						</view>
						<text class="iconfont icon-play"></text>
					</view> -->
					<view 
						class="list-music-item" 
						v-for="(item, index) in playlist.tracks"
						:key="index"
						@tap="toDetail(item.id)"
					>
						<view class="list-music-top">{{index + 1}}</view>
						<view class="list-music-song">
							<view>{{item.name}}</view>
							<view>
								<image src="../../static/dujia.png"></image>
								<image src="../../static/dujia.png"></image>
								<text>{{item.ar[0].name}} - {{item.name}}</text>
							</view>
						</view>
						<text class="iconfont icon-play"></text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import NavBar from '../../components/navigation-bar/navigation-bar.vue'
	import { listDetail } from '../../common/api.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				playlist: {
					creator: {}
				},
				privileges: []
			}
		},
		onLoad(options){
			console.log(options)
			listDetail(options.listId).then(res => {
				console.log(res)
				this.playlist = res.data.playlist
			})
		},
		methods: {
			toDetail(songId){
				uni.navigateTo({
					url:"/pages/detail/detail?songId=" + songId
				})
			}
		}
	}
</script>

<style scoped>
@import url("./list.css");
</style>
