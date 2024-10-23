import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#AD1FEA",
        "primary-blue": "#4661E6",
        "primary-dark-blue": "#373F68",
        "primary-white": "#FFFFFF",
        "secondary-grey": "#F2F4FF",
        "secondary-light-grey": "#F7F8FD",
        "secondary-dark-blue": "#3A4374",
        "secondary-dark-grey": "#647196",
        "secondary-white": "#F2F4FE",
        "tertiary-orange": "#F49F85",
        "tertiary-sky": "#62BCFA",
        "tertiary-blue": "#CFD7FF",
      },
      fontSize: {
        "heading-1": [
          "1.5rem",
          {
            lineHeight: "2.1875rem",
            letterSpacing: "-0.0206rem",
            fontWeight: "700",
          },
        ],
        "heading-2": [
          "1.25rem",
          {
            lineHeight: "1.813rem",
            letterSpacing: "-0.016rem",
            fontWeight: "700",
          },
        ],
        "heading-3": [
          "1.125rem",
          {
            lineHeight: "1.625rem",
            letterSpacing: "-0.016rem",
            fontWeight: "700",
          },
        ],
        "heading-4": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "-0.013rem",
            fontWeight: "700",
          },
        ],
        "body-1": [
          "1rem",
          {
            lineHeight: "1.438rem",
          },
        ],
        "body-2": [
          "0.938rem",
          {
            lineHeight: "1.375rem",
          },
        ],
        "body-3": [
          "0.813rem",
          {
            lineHeight: "1.188rem",
            fontWeight: "600",
          },
        ],
      },
      backgroundImage: {
        "desktop-gradient": 'url("/images/background-header.png")',
        "purple-gradient":
          "linear-gradient(45deg, #E84D70 0%, #A337F6 53%, #28A7ED 100%)",
      },
      borderRadius: {
        md: "0.625rem",
      },
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
