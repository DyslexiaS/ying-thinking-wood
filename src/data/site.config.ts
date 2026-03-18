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
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'YING TSAO', // Site author
	title: "Ying's Forest", // Site title.
	description: "Ying's Forest is a blog about the life of Ying Tsao.", // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	paginationSize: 10 // Number of posts per page
}
