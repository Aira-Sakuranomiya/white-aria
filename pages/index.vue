<script setup lang="ts">
	useHead({ title: "首页" });
</script>

<template>
	<div class="background">
		<nuxt-img src="images/00622-2969830249.png" />
	</div>
	<div class="header">
		<h1>桜ノ宮<b>アイラ</b></h1>
		<h2><b>Kind and Kawaii</b>, Forever!~</h2>
		<SocialButtons />
	</div>
	<nuxt-img src="images/avatar.webp" class="avatar" />
</template>

<style scoped lang="scss">
	$avatar-size: 28dvw;
	$center: 60dvh;

	.background {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: $center;
		overflow: hidden;
		pointer-events: none;

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 50% 20%;
		}

		&::before {
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
			background-color: var(--accent-500);
			opacity: 0.8;
			content: "";
		}
	}

	.header {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.5dvw;
		justify-content: flex-end;
		height: $center;
		padding: 0 10dvw;
		padding-bottom: 3dvw;
		padding-left: calc(10dvw + $avatar-size + 5dvw);
		color: white;

		h1, h2 {
			font-weight: 400;
		}

		.social-buttons {
			position: absolute;
			top: $center + 2dvh;
			margin-left: -0.5rem;
		}
	}

	.avatar {
		width: $avatar-size;
		margin-top: -20dvw;
		margin-left: 10dvw;
		border-radius: 100%;
	}

	h1 {
		display: flex;
		gap: 0.5em;
		font-size: 7dvw;
		font-family: "Noto Sans CJK JP", "Noto Sans JP", "Yu Gothic", sans-serif;
		text-shadow: 0 0.05em 0.1em var(--accent-500);

		b {
			font-weight: 900;
		}
	}

	h2 {
		margin-left: 0.1em;
		font-size: 2dvw;
		text-shadow: 0 0.05em 0.1em var(--accent-500);

		@include screen(sm) {
			font-size: 1rem;
		}
	}
</style>
