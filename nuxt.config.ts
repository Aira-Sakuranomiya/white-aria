// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	modules: [
		'@nuxt/image',
		'nuxt-icons',
	],
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
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{
					name: "referrer",
					content: "no-referrer",
				},
			],
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
				// {
				// 	rel: "stylesheet",
				// 	href: "https://fonts.googleapis.com/icon?family=Material+Icons",
				// },
			],
		},
	},
	experimental: {
		asyncContext: true
	}
});
