import type { Config } from "tailwindcss";

const config: Config = {
  //content: [
  //  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  //],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "neutral-grey-10": "#fff",
        tomato: {
          "100": "#ff4d42",
          "200": "rgba(255, 77, 66, 0.09)",
          "300": "rgba(240, 51, 40, 0.2)",
        },
        "text-300": "#a6a7ab",
        "primary-blue-50": "#ebfbfe",
        "primary-blue-600": "#0eb4d3",
        "primary-blue-700": "#0b87ac",
        "text-400": "#5c5f66",
        "neutral-200": "#e6e6e6",
        "neutral-grey-04": "#5c5c5c",
        secondry: "#ff9e0c",
        oldlace: "#fef4e5",
        antiquewhite: "#e6dbcc",
        chocolate: "#cc6b00",
        "neutral-grey-02": "#1f1f1f",
        primary: "#f03328",
        "text-50": "#fdfdfd",
        "neutral-grey-08": "#d6d6d6",
        "color-text-primary": "#040f0f",
        gray: "#101113",
        orange: "rgba(255, 158, 12, 0.2)",
        black: "#000",
        "neutral-grey-03": "#3d3d3d",
        "grey-grey-500": "#404040",
        "grey-grey-700": "#2d2d2d",
        "grey-grey-400": "#666",
        "grey-grey-600": "#3a3a3a",
      },
      spacing: {},
      fontFamily: {
        "body-caption-s-regular": "Poppins",
        nunit06: "Nunito",
      },
      borderRadius: {
        "45xl": "64px",
        "20xl-8": "39.8px",
        lg: "18px",
        "19xl": "38px",
        "146xl-4": "165.4px",
        "10xl": "29px",
        xl: "20px",
        "48xl-7": "67.7px",
        sm: "14px",
        "12xl": "31px",
        "35xl": "54px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      base: "1rem",
      sm: "0.875rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "6xl": "1.563rem",
      xl: "1.25rem",
      "31xl": "3.125rem",
      "11xl": "1.875rem",
      "21xl": "2.5rem",
      "15xl": "2.125rem",
      "8xl": "1.688rem",
      "12xl": "1.938rem",
      "36xl": "3.438rem",
      "14xl": "2.063rem",
      "25xl": "2.75rem",
      "42xl": "3.813rem",
      "18xl": "2.313rem",
      "30xl": "3.063rem",
      inherit: "inherit",
    },
    screens: {
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
export default config;
