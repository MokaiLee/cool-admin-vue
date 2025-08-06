<template>
	<el-scrollbar>
		<div class="base">
			<div class="wrapper">
				<div class="content">
					<slot />
				</div>
				<cloud />
			</div>
		</div>
		<sky />
	</el-scrollbar>
</template>

<script>
import Cloud from './Cloud.vue';
import Sky from './Sky.vue';
export default {
	name: 'base-layout',
	components: {
		Cloud,
		Sky
	}
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&display=swap');
.base {
	width: 100%;
	min-height: 100dvh;
	font-family: 'Nunito Sans', sans-serif;
	font-size: 15px;
	display: flex;
	flex-direction: column;
	// 动态背景
	// background: linear-gradient(-45deg, #23a6d5, #23d5ab, #36c, #8dcbf3) 0 50%;
	// animation: gradientBG 20s ease infinite;
	// animation-delay: 10s;
	// background-size: 400% 400%;

	.content {
		flex-grow: 1;
	}
}
sky {
	z-index: 0;
}
.wrapper {
	position: relative;
	z-index: 1;
	width: 100%;
	min-height: 100dvh;
	font-family: 'Nunito Sans', sans-serif;
	font-size: 15px;
	display: flex;
	flex-direction: column;
}
@keyframes gradientBG {
	0% {
		background-position: 0 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0 50%;
	}
}
</style>
