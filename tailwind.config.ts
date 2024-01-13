import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "hsl(250, 0%, 30%)",
                secondary: "hsl(0,0%, 20%)",
                accent: "hsl(60, 80%, 50%)",
                font: "hsl(0, 0%, 100%)",
                tertiary: "hsl(120, 100%, 50%)",
                quaternary: "hsl(0,100%, 50%)",
            },
        },
    },
    plugins: [],
};
export default config;
