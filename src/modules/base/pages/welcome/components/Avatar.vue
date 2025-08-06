<template>
	<div class="avatar-container">
		<div class="avatar" @click="enter">
			<!--      <img src="https://pro-file.xiaoheiban.cn/nol/91bb1e24-eb8e-4567-b903-7ad853af671b.png" alt="avatar">-->
			<img src="/logo.png" alt="avatar" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { router } from '/@/cool';

defineOptions({
	name: 'avatar'
});

const enter = () => {
	router.push('/login');
};
</script>

<style lang="scss" scoped>
@use './global' as *;
$avatar-size: 200px;
$ripple-color: white;
$border-color: white;
.avatar-container {
	display: inline-block;
	padding: 70px 0 20px 0;
	box-sizing: border-box;
	width: 100vw;
}
.avatar {
	cursor: pointer;
	max-width: $avatar-size;
	max-height: $avatar-size;
	margin: 0 auto;
	border-radius: 50%;
	overflow: hidden;
	border: $border-color 5px solid;
	background-color: $border-color;
	animation: at-ripple 1.5s linear infinite;
	@include flex-center;
	img {
		width: 100%;
		height: 100%;
	}
}
@media only screen and (max-width: 1024px) {
	.avatar {
		cursor: pointer;
		max-width: 100px;
		max-height: 100px;
		margin: 0 auto;
		border-radius: 50%;
		overflow: hidden;
		border: $border-color 5px solid;
		background-color: $border-color;
		animation: at-ripple 1.5s linear infinite;
		@include flex-center;
		img {
			width: 100%;
			height: 100%;
		}
	}
}
@keyframes at-ripple {
	0% {
		box-shadow:
			0 4px 10px rgba($ripple-color, 0.1),
			0 0 0 0 rgba($ripple-color, 0),
			0 0 0 5px rgba($ripple-color, 0),
			0 0 0 10px rgba($ripple-color, 0);
	}
	50% {
		box-shadow:
			0 4px 10px rgba($ripple-color, 0.1),
			0 0 0 0 rgba($ripple-color, 0.2),
			0 0 0 10px rgba($ripple-color, 0.2),
			0 0 0 25px rgba($ripple-color, 0.2);
	}
	100% {
		box-shadow:
			0 4px 10px rgba($ripple-color, 0),
			0 0 0 0 rgba($ripple-color, 0),
			0 0 0 18px rgba($ripple-color, 0),
			0 0 0 45px rgba($ripple-color, 0);
	}
}
@keyframes jump {
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(10px);
	}
	100% {
		transform: translateY(0);
	}
}
</style>
