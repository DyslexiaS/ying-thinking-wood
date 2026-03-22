interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://ying-thinking-wood.pages.dev/', // Write here your website url
	author: 'YING TSAO', // Site author
	title: "Ying's Thinking Wood", // Site title.
	description:
		"Ying's Thinking Wood is a blog where I slow down, wander through thoughts, and write about life — its quiet moments, lingering questions, and everything worth sitting with.", // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	paginationSize: 10 // Number of posts per page
}
