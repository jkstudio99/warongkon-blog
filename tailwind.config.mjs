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
        sans: ['Inter', '"IBM Plex Sans Thai Looped"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            letterSpacing: '-0.011em',
            '--tw-prose-body': '#3f3f46',
            '--tw-prose-headings': '#18181b',
            '--tw-prose-bold': '#18181b',
            '--tw-prose-links': '#18181b',
            h1: {
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '600',
              letterSpacing: '-0.02em',
              marginTop: '2.5rem',
            },
            p: {
              marginBottom: '1.5rem',
            }
          }
        }
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
}
