import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vh",
      },
      maxWidth: {
        "1/2": "50%",
      },
      width: {
        "90%": "90%",
      },
      fontFamily: {
        sans: ["Aptio", ...defaultTheme.fontFamily.sans],
        mono: ["IBM\\ 3270", ...defaultTheme.fontFamily.mono],
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      colors: {
        // orange: {
        //   400: "#FF7733",
        //   50: "#FFF1EB",
        // },
        // transparent: "transparent",
        // current: "currentColor",
        // ...colors,
        gray: colors.slate,
        resume: {
          light: colors.teal[50],
          primary: colors.teal[700],
          // light: colors.indigo[50],
          // primary: colors.indigo[700],
        },
      },
    },
  },
  plugins: [],
}

