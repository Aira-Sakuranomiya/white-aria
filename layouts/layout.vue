<script setup lang="ts">

</script>

<template>
	<Navigation class="navigation" />
	<div class="container">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
	.navigation {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 3rem;
	}
</style>
