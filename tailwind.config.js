/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["app/**/*.{html,js}", "components/**/*.{html,js}"],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

