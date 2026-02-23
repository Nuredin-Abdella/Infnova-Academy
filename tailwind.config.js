module.exports = {
    content: [
        "./pages/**/*.{js,jsx,mdx}",
        "./components/**/*.{js,jsx,mdx}",
        "./app/**/*.{js,jsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF6B00',
                    dark: '#E66000',
                    light: '#FF8533',
                },
                dark: {
                    DEFAULT: '#0F172A',
                    light: '#1E293B',
                },
                academic: {
                    navy: '#1B263B',
                    gold: '#FFD700',
                    gray: '#F8F9FA'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
