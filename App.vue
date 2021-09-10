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

<style>
	/*每个页面公共css */
@import url("~@/common/iconfont.css");
.scroll-view-box{
	width: 100%;
	height: calc(100vh - 70px);
	overflow: hidden;
}
.scroll-view-box scroll-view{
	height: 100%;
}
</style>
