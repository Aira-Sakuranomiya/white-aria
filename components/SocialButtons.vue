<script setup lang="ts">

</script>

<template>
	<div class="social-buttons">

		<a href="https://twitter.com/otomadhero" target="_blank" title="Twitter">
			<ButtonIcon name="logo/twitter" />
		</a>

		<a href="https://www.youtube.com/@otomadhero" target="blank" title="YouTube">
			<ButtonIcon name="logo/youtube" />
		</a>

		<a href="https://space.bilibili.com/22807093" target="_blank" title="bilibili">
			<ButtonIcon name="logo/bilibili" />
		</a>

		<a href="https://www.nicovideo.jp/user/66837079" target="_blank" title="niconico">
			<ButtonIcon name="logo/niconico" />
		</a>

		<a href="https://music.163.com/#/user/home?id=86334936" target="blank" title="网易云音乐">
			<ButtonIcon name="logo/cloudmusic" />
		</a>

		<a href="https://github.com/Aira-Sakuranomiya" target="blank" title="GitHub">
			<ButtonIcon name="logo/github" />
		</a>

		<a href="https://discord.gg/DW6CYe3pKt" target="_blank" title="Discord Server">
			<ButtonIcon name="logo/discord" />
		</a>

		<a href="https://qm.qq.com/q/8Z15TvFcyI" target="_blank" title="QQ群">
			<ButtonIcon name="logo/qq" />
		</a>

	</div>
</template>

<style scoped lang="scss">
	.social-buttons {
		display: flex;
		flex-wrap: wrap;

		a>.button-icon {
			fill: var(--accent-500);
		}
	}
</style>
