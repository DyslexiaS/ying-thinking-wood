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
		'一個讓自己放慢的地方。寫下生活裡的安靜時刻、還沒想完的問題，以及值得坐下來面對的事。', // Description to display in the meta tags
	lang: 'zh-Hant',
	ogLocale: 'zh_TW',
	paginationSize: 10 // Number of posts per page
}
