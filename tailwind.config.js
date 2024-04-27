/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'gray-50': '#F8FAFC',
				'gray-100': '#F1F5F9',
				'gray-200': '#E2E8F0',
				'gray-300': '#CBD5E1',
				'gray-400': '#94A3B8',
				'gray-500': '#64748B',
				'gray-600': '#475569',
				'gray-700': '#334155',
				'gray-800': '#1E293B',
				'gray-900': '#0F172A',
				'green-900': '#064E3B'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
}
