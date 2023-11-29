<script setup lang="ts">

</script>

<template>
	<div class="home-projects">
		<h4>+ Projects +</h4>
		<div class="projects">
			<Project href="https://space.bilibili.com/171767281/" name="NOVA音MAD社" icon="logo/nova" />
			<Project href="https://otomad.wiki/" name="OtomadWiki" icon="logo/otomadwiki" />
			<Project href="https://github.com/KIRAKIRA-DOUGA/" name="KIRAKIRA" icon="logo/kirakira" />
			<Project href="https://www.calibur.tv/" name="calibur" icon="logo/calibur" />
		</div>
	</div>
</template>

<style scoped lang="scss">
	$padding: 10vh;

	.home-projects {
		display: flex;
		flex-direction: column;
		gap: $padding;
		align-items: center;
		justify-content: center;
		padding: $padding;
	}

	h4 {
		color: var(--accent-500);
		font-size: 1.5rem;
		text-align: center;

		@include dark {
			@include small-text-shadow;
		}
	}

	.projects {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		place-items: center;

		@include small-tablet {
			grid-template-columns: 1fr;
		}
	}
</style>
