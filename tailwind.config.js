/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html", "./app/**/*.{ts,tsx}"],
    plugins: [],
    theme: {
        fontFamily: {
            serif: ["var(--font-baskerville)"],
            sans: ["var(--font-noto-sans)"],
        },
        extend: {
            animation: {
                fadeIn1: 'fadeIn1 300ms ease-in-out',
                fadeIn2: 'fadeIn2 600ms ease-in-out',
                fadeIn3: 'fadeIn3 900ms ease-in-out',
                fadeIn4: 'fadeIn4 1200ms ease-in-out',
                fadeIn5: 'fadeIn4 1500ms ease-in-out',
            },
            keyframes: {
                fadeIn1: {
                    '0%': {opacity: '0', },
                    '20%': {opacity: '0', },
                    '100%': {opacity: '1' },
                },
                fadeIn2: {
                    '0%': {opacity: '0', },
                    '40%': {opacity: '0', },
                    '100%': {opacity: '1' },
                },
                fadeIn3: {
                    '0%': {opacity: '0', },
                    '60%': {opacity: '0', },
                    '100%': {opacity: '1' },
                },
                fadeIn4: {
                    '0%': {opacity: '0', },
                    '80%': {opacity: '0', },
                    '100%': {opacity: '1' },
                },
            },
        },
    },
};
