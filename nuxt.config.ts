// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: false,
	},

	modules: [
		"@nuxt/image",
		"nuxt-icons",
		"@nuxt/content",
		"@vueuse/nuxt",
	],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler",
					additionalData: '@use "@/assets/styles/_mixins.scss" as *;',
				},
			},
		},
	},

	app: {
		pageTransition: { name: "page", mode: "out-in" },
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
					href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
				},
			],
		},
	},

	experimental: {
		asyncContext: true,
	},

	compatibilityDate: "2024-08-10",
});
