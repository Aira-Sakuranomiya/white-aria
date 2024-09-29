<script setup lang="ts">

</script>

<template>
	<div class="home-projects">
		<h2>+ Projects +</h2>
		<div class="projects">
			<Project href="https://space.bilibili.com/171767281/" name="NOVA音MAD社" icon="logo/nova" />
			<Project href="https://otomad.wiki/" name="OtomadWiki" icon="logo/otomadwiki" />
			<Project href="https://www.calibur.tv/" name="calibur" icon="logo/calibur" />
			<Project href="https://kirakira.moe" name="KIRAKIRA" icon="logo/kirakira" />
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

h2 {
	color: var(--accent-500);
	font-size: 2rem;
	text-align: center;

	@include dark {
		@include small-text-shadow;
	}
}

.projects {
	display: flex;
	gap: 3rem;
	width: 100%;

	@include tablet {
		flex-direction: column;
	}
}
</style>
