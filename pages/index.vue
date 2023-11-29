<script setup lang="ts">
	useHead({ title: "Home" });
</script>

<template>
	<div class="page-wrapper">
		<HomeHeader />
		<HomeProjects />
	</div>
</template>

<style scoped lang="scss">
	.page-wrapper {
		height: 100dvh;
		padding-top: 0 !important;
		overflow-y: scroll;

		>* {
			height: 100dvh;
		}
	}
</style>
