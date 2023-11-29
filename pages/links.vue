<script setup lang="ts">
	useHead({ title: "Links" });
</script>

<template>
	<div class="page-wrapper">
		<h4>+ Friends' Sites +</h4>
		<div class="links">
			<a href="https://lachrymal.net">lachrymaL</a>
			<a href="https://aliv.life/">alivemaster</a>
			<a href="https://megakite.icu">megakite</a>
			<a href="https://akutazehy.github.io">Akuta Zehy</a>
			<a href="https://ali-a.cn/">熊可狸</a>
			<a href="https://wzq02.cf/">wzq02</a>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.page-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		align-items: center;
		justify-content: center;
		height: 100vh;
		padding-top: 0 !important;
	}

	h4 {
		color: var(--accent-500);
		font-size: 1.5rem;
		text-align: center;
		animation: link-intro 1s cubic-bezier(0.1, 0.9, 0.2, 1) backwards;

		@include dark {
			@include small-text-shadow;
		}
	}

	@keyframes link-intro {
		from {
			transform: translateY(100vh);
		}
	}

	@for $i from 1 through 8 {
		.links a:nth-of-type(#{$i}) {
			animation-delay: calc($i / 20) + s !important;
		}
	}

	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 10vw;

		a {
			padding: 1.5rem 0;
			color: var(--accent-500);
			text-decoration: none;
			transition: 0.2s;
			animation: link-intro 1s cubic-bezier(0.1, 0.9, 0.2, 1) backwards;

			&:hover {
				scale: 1.1;
				opacity: 0.5;
			}
		}
	}
</style>
