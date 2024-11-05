import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
        backgroundImage: {
          'custom-gradient':
            'linear-gradient(110.87deg, rgba(78, 89, 192, 0.2) 7.78%, rgba(17, 18, 27, 0) 86.01%)',
        },
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
        },
      },
    },
  plugins: [],
};
export default config;
