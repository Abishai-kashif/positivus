import type { Config } from "tailwindcss";

// const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				primary: "#B9FF66",
				secondary: "#191A23",
				accent: "#F3F3F3",
			},

			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",

				scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},

			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},

				scroll: {
					// from: { transform: "translate(0))" }
					to: { transform: "translate(calc(-50% - 0.5rem))" },
				},
			},
			fontSize: {
				h1: "60px",
				h1Mobile: "43px",
				h2: "40px",
				h3: "30px",
				h3Mobile: "26px",
				p: "20px",
			},
		},
	},

	plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default config;
