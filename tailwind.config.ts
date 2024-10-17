import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontSize: {
				'heading-1': [
					'1.5rem',
					{
						lineHeight: '2.1875rem',
						letterSpacing: '-0.0206rem',
						fontWeight: '700',
					},
				],
				'heading-2': [
					'1.25rem',
					{
						lineHeight: '1.813rem',
						letterSpacing: '-0.016rem',
						fontWeight: '700',
					},
				],
				'heading-3': [
					'1.125rem',
					{
						lineHeight: '1.625rem',
						letterSpacing: '-0.016rem',
						fontWeight: '700',
					},
				],
				'heading-4': [
					'0.875rem',
					{
						lineHeight: '1.25rem',
						letterSpacing: '-0.013rem',
						fontWeight: '700',
					},
				],
				'body-1': [
					'1rem',
					{
						lineHeight: '1.438rem',
					},
				],
				'body-2': [
					'0.938rem',
					{
						lineHeight: '1.375rem',
					},
				],
				'body-3': [
					'0.813rem',
					{
						lineHeight: '1.188rem',
						fontWeight: '600',
					},
				],
			},
		},
	},

	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-animate')],
}
export default config
