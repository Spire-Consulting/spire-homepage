/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            sans: ['"Mulish"', "sans-serif"]
        },
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                black: colors.black,
                white: colors.white,
                gray: colors.gray,
                emerald: colors.emerald,
                indigo: colors.indigo,
                yellow: colors.yellow,
                red: colors.red,
                lightBlue: "#89D5F1",
                blue: {
                    100: "#a6c4f4",
                    200: "#79a6ee",
                    300: "#4d89e9",
                    400: "#367ae6",
                    500: "#206BE3",
                    600: "#1d60cc",
                    700: "#164b9f",
                    800: "#134088",
                    900: "#0d2b5b"
                },
                darkBlue: "#1D1C54",
                lime: "#CFF26C"
            }
        }
    },
    plugins: []
}
