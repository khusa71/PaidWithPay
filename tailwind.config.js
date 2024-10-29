/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		height: {
		  'card': '250px',
		  'hero': '600px',
		},
		minHeight: {
		  'card': '250px',
		},
		maxWidth: {
		  '8xl': '88rem',
		},
		spacing: {
		  '18': '4.5rem',
		},
		keyframes: {
		  "accordion-down": {
			from: { height: 0 },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: 0 },
		  },
		  "fade-in": {
			from: { opacity: 0 },
			to: { opacity: 1 },
		  },
		  "fade-out": {
			from: { opacity: 1 },
			to: { opacity: 0 },
		  },
		  "slide-in": {
			from: { transform: "translateY(20px)", opacity: 0 },
			to: { transform: "translateY(0)", opacity: 1 },
		  },
		  "dropdown-down": {
			from: { height: 0 },
			to: { height: "var(--radix-dropdown-content-height)" },
		  },
		  "dropdown-up": {
			from: { height: "var(--radix-dropdown-content-height)" },
			to: { height: 0 },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		  "fade-in": "fade-in 0.5s ease-out",
		  "fade-out": "fade-out 0.5s ease-out",
		  "slide-in": "slide-in 0.5s ease-out",
		  "dropdown-down": "dropdown-down 0.2s ease-out",
		  "dropdown-up": "dropdown-up 0.2s ease-out",
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  require("@tailwindcss/forms"),
	],
  }