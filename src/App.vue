<template>
	<div>
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
    </div>
</template>

<script>
  	export default {
  	}

</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
	.van-tabs__line {
		// z-index: 1;
		// left: 0;
		// bottom: 15px;
		height: 2px!important;
		// position: absolute;
		// border-radius: 3px;
		background-color: #00BEAF!important;
	}
</style>
