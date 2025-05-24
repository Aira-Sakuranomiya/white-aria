<script setup lang="ts">
useHead({ title: "Home" });
</script>

<template>
	<div class="page-container">
		<HomeHeader />
		<HomeProjects />
	</div>
</template>

<style scoped lang="scss">
.page-container {
	> *:nth-child(1) {
		height: 100dvh;
	}
}
</style>
