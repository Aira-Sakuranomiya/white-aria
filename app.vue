<script setup lang="ts">
useHead({
	titleTemplate: "%s - AIRA",
})
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss">
:root {
	--accent-300: #eab8c4;
	--accent-500: #f06e8e;
	--accent-500-rgb: 240 110 142;
	--hover-overlay: rgb(0 0 0 / 5%);
	--hover-overlay-light: rgb(255 255 255 / 15%);
	--ripple: var(--hover-overlay);
	--main-bg: white;
	--icon: #797173;
	background-color: var(--main-bg);

	@include dark {
		--hover-overlay: rgb(255 255 255 / 8%);
		--main-bg: black;
		--icon: #e5e4e4;
	}
}

*,
::before,
::after {
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
	-moz-osx-font-smoothing: grayscale;
	font-feature-settings: "liga";
}

body {
	margin: 0;
	padding: 0;
	overflow: hidden;
	font-size: 16px;
	font-family: -apple-system, BlinkMacSystemFont, "Roboto Flex", Roboto, Inter, "Segoe UI Variable Display", "Segoe UI", Ubuntu, Cantarell, "Noto Sans CJK SC", "Noto Sans SC", "Source Han Sans CN", "Microsoft YaHei UI", "Microsoft YaHei", system-ui, sans-serif;
	-webkit-tap-highlight-color: transparent;
}

@media (prefers-reduced-motion: reduce) {
	*,
	::before,
	::after {
		transition-duration: 0s !important;
		animation-duration: 0s !important;
	}
}

// reset
h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: Montserrat, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}

a {
	text-decoration: none;
}

.nav-bg {
	position: sticky;
	width: 100%;
	height: 3rem;
	background-color: var(--accent-500);
	box-shadow: 0 0 1.5rem 0 rgb(var(--accent-500-rgb) / 30%);
}

// .page-enter-active {
// 	transition: all 0.6s cubic-bezier(0.1, 0.9, 0.2, 1);
// }

.page-leave-active {
	transition: all 0.1s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

// .page-enter-from {
// 	transform: translateY(8rem);
// 	opacity: 0;
// }

.page-leave-to {
	transform: translateY(-8rem);
	opacity: 0;
}

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
	/* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
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
	user-select: none;
}
</style>
