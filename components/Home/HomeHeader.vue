<script setup lang="ts">

</script>

<template>
	<div class="home-header">
		<div class="background">
			<NuxtImg
				src="https://i0.hdslb.com/bfs/new_dyn/a6d44500ef3c61e4cc8d91196f0a4ba1456935358.png@1024w_1024h.avif" />
		</div>
		<div class="header">
			<h1>桜ノ宮<b>アイラ</b></h1>
			<h2><b>Kind and Kawaii</b>, Forever!~</h2>
			<SocialButtons />
		</div>
		<NuxtImg src="https://i1.hdslb.com/bfs/face/0997d3ad773f67b3bfd7294edfa63b23981aee02.jpg@733w_733h.avif"
			class="avatar" />
	</div>
</template>

<style scoped lang="scss">
	$avatar-size: 28dvw;
	$center: 60dvh;

	.background {
		position: absolute;
		right: 0;
		left: 0;
		z-index: -1;
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

		h1,
		h2 {
			font-weight: 400;
		}

		.social-buttons {
			position: absolute;
			top: $center + 2dvh;
			margin-left: -0.5rem;
			padding-right: 1rem;
		}
	}

	.avatar {
		width: $avatar-size;
		margin-top: -20dvw;
		margin-left: 10dvw;
		border-radius: 100%;
	}

	h1 {
		@include text-shadow;
		display: flex;
		gap: 0.5em;
		font-size: 6dvw;
		font-family: "Noto Sans CJK JP", "Noto Sans JP", "Yu Gothic", sans-serif;


		b {
			font-weight: 900;
		}
	}

	h2 {
		@include text-shadow;
		margin-left: 0.1em;
		font-size: 2dvw;

		@include tablet {
			font-size: 1rem;
		}
	}
</style>
