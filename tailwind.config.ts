import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#2FBFA6",
        secondary: "#36E1BC",
        biru: "#18BEFD",
      },
    },
  },
  plugins: [],
} satisfies Config;
