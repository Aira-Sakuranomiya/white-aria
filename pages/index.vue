<script setup lang="ts">
	useHead({ title: "首页" });
</script>

<template>
	<section>
		<HomeHeader />
	</section>

	<section>
		<HomeWho />
	</section>
</template>

<style scoped lang="scss">
	.home-header {
		height: 100vh;
	}

	section {
		position: sticky;
		top: 0;
		width: 100%;
		height: 100vh;
		backdrop-filter: blur(8px);

		&:nth-child(1) {
			backdrop-filter: none;
		}

		>* {
			height: 100%;
		}
	}
</style>
