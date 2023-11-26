<script setup lang="ts">
	useHead({
		titleTemplate: "%s - AIRA",
	})
</script>

<template>
	<div>
		<NuxtLayout name="layout">
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss">
	/* fallback */
	@font-face {
		font-weight: 400;
		font-family: "Material Icons Round";
		font-style: normal;
		font-display: block;
		src: url("https://fonts.gstatic.com/s/materialiconsround/v108/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw.woff2") format("woff2");
	}

	.material-icons {
		display: inline-block;
		font-weight: normal;
		font-size: 24px;
		font-family: "Material Icons Round";
		font-style: normal;
		line-height: 1;
		direction: ltr;
		letter-spacing: normal;
		white-space: nowrap;
		text-transform: none;
		word-wrap: normal;
		font-feature-settings: "liga";
		-webkit-font-smoothing: antialiased;
	}
</style>
