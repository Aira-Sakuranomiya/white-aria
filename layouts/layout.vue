<script setup lang="ts">

</script>

<template>
	<SideBar class="sidebar" />
	<div class="container">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		height: 100dvh;
	}
</style>
