<script setup lang="ts">

</script>

<template>
	<!-- <Navigation class="navigation" /> -->
	<div class="container">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
	// .navigation {
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	height: 100dvh;

	// 	@include phone {
	// 		top: unset;
	// 		bottom: 0;
	// 		width: 100dvw;
	// 		height: 3rem;
	// 	}
	// }

	// .container {
	// 	padding-left: 3rem;

	// 	@include phone {
	// 		padding-bottom: 3rem;
	// 		padding-left: unset;
	// 	}
	// }
</style>
