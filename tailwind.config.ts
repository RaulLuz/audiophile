import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": 'rgb(var(--primary),<alpha-value>)',
        "secondary": 'rgb(var(--secondary),<alpha-value>)',
        "primary-light": 'rgb(var(--primary-light),<alpha-value>)',
        "grey": 'rgb(var(--grey),<alpha-value>)',
        "light-grey": 'rgb(var(--light-grey),<alpha-value>)',
        "white": 'rgb(var(--white),<alpha-value>)',
        "black": 'rgb(var(--black),<alpha-value>)',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
export default config;
