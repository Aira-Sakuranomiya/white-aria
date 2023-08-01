// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	modules: [
		'@nuxt/image',
		'@nuxtjs/svg-sprite',
	],
	svgSprite: {
		input: "~/assets/icons",
	},
	css: [
		"assets/styles/global.scss",
		"assets/styles/global-colors.scss"
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/_mixins.scss" as *;',
				},
			},
		},
	},
	app: {
		head: {
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap",
				},
			],
		},
	},
});
