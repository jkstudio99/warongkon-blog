/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
			center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '2rem',
      },
			screens: {
				xl: '1180px',
        '2xl': '1280px',
			}
		},
		extend: {
      fontFamily: {
        sans: ['THSarabun', 'TH Sarabun New', 'TH SarabunPSK', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            fontSize: '1.16rem',
            lineHeight: '1.72',
            color: '#27272a',
            '--tw-prose-body': '#27272a',
            '--tw-prose-headings': '#18181b',
            '--tw-prose-lead': '#3f3f46',
            '--tw-prose-links': '#18181b',
            '--tw-prose-bold': '#18181b',
            '--tw-prose-counters': '#52525b',
            '--tw-prose-bullets': '#71717a',
            '--tw-prose-hr': '#d4d4d8',
            '--tw-prose-quotes': '#18181b',
            '--tw-prose-quote-borders': '#a1a1aa',
            '--tw-prose-captions': '#52525b',
            '--tw-prose-code': '#18181b',
            '--tw-prose-pre-code': '#f4f4f5',
            '--tw-prose-pre-bg': '#18181b',
            '--tw-prose-th-borders': '#d4d4d8',
            '--tw-prose-td-borders': '#e4e4e7',
            '--tw-prose-invert-body': '#e4e4e7',
            '--tw-prose-invert-headings': '#fafafa',
            '--tw-prose-invert-lead': '#d4d4d8',
            '--tw-prose-invert-links': '#fafafa',
            '--tw-prose-invert-bold': '#fafafa',
            '--tw-prose-invert-counters': '#d4d4d8',
            '--tw-prose-invert-bullets': '#a1a1aa',
            '--tw-prose-invert-hr': '#3f3f46',
            '--tw-prose-invert-quotes': '#fafafa',
            '--tw-prose-invert-quote-borders': '#71717a',
            '--tw-prose-invert-captions': '#d4d4d8',
            '--tw-prose-invert-code': '#fafafa',
            '--tw-prose-invert-pre-code': '#f4f4f5',
            '--tw-prose-invert-pre-bg': 'rgba(24, 24, 27, 0.88)',
            a: {
              fontWeight: '700',
            },
            p: {
              maxWidth: 'var(--reading-measure)',
            },
            li: {
              maxWidth: 'var(--reading-measure)',
            },
            h1: {
              lineHeight: '1.12',
            },
            h2: {
              lineHeight: '1.2',
            },
            h3: {
              lineHeight: '1.25',
            },
          }
        }
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
}
