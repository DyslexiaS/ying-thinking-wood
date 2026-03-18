/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#f8f9fa',
				forest: {
					bg: '#F7F5F0',
					'bg-dark': '#0E1210',
					'bg-card': '#F0EDE6',
					'bg-card-dark': '#151A16',
					text: '#1C1C18',
					'text-dark': '#E8E4DC',
					accent: '#4A6741',
					'accent-dark': '#7DAB74',
					amber: '#B89A6B',
					'amber-dark': '#C4A882',
					muted: '#7A7570',
					'muted-dark': '#8A8880',
					border: '#DDD9D2',
					'border-dark': '#2A3028'
				}
			},
			fontFamily: {
				body: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
