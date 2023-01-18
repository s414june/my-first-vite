/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                '192': '48rem',
            },
            boxShadow: {
                'no-offset': '0 0 4px 2px rgb(0 0 0 / 0.1)'
            }
        },
    },
    plugins: [],
};