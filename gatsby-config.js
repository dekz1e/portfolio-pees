module.exports = {
	siteMetadata: {
		title: `Mush House`,
		titleTemplate: '%s - Produkty tworzone na miare',
		description: `Projektujemy oraz wdrażamy strony, sklepy oraz aplikacje
		internetowe. Zajmujemy się również tworzeniem różnego rodzaju
		materiałów graficznych.`,
		url: 'https://www.mushouse.pl',
		siteUrl: `https://www.mushouse.pl`,
		twitterUsername: '@mushousepl',
		facebookUsername: '@mushousepl',
		instagramUsername: '@mushousepl',
	},
	plugins: [
		{
			resolve: 'gatsby-source-datocms',
			options: {
				apiToken: 'e67639407efa38257ebca8488ab9e9',
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Mush House - Produkty tworzone na essie!',
				short_name: 'Mush House',
				description: `Projektujemy oraz wdrażamy strony, sklepy oraz aplikacje
				internetowe. Zajmujemy się również tworzeniem różnego rodzaju
				materiałów graficznych.`,
				lang: 'pl',
				icon: './src/images/icon2.png',
				start_url: '/',
			},
		},
		'gatsby-plugin-styled-components',
		`gatsby-plugin-anchor-links`,
		`gatsby-plugin-netlify`,
	],
};
