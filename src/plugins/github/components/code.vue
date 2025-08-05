<template>
	<div class="cl-comm__icon" @click="toCode">
		<cl-svg name="github" />
	</div>
</template>

<script setup lang="ts">
function toCode() {
	window.open('https://github.com/MokaiLee/cool-admin-vue', '_blank');
}
</script>
