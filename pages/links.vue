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
		gap: 4rem;
		align-items: center;
		justify-content: center;
		height: 100vh;
		padding-top: 0 !important;
		background-color: var(--accent-500);
	}

	h4 {
		color: white;
		font-size: 1.5rem;
		text-align: center;
	}

	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 10vw;

		a {
			padding: 1.5rem 0;
			color: white;
			text-decoration: underline;

			&:hover {
				opacity: 0.5;
			}
		}
	}
</style>
