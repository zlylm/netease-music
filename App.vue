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
.fixbg{
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	/* background-image: url('./static/logo.png'); */
	background-size: cover;
	background-position: 0 center;
	filter: blur(20px);
	transform: scale(1.2);
}
</style>
