import { theme } from "@chakra-ui/core";

//MEDIA QUERIES
//  0-600px        phone
//  600px-900px    Table portrait
//  900px-1200px   Tablet landscape
//  1200px-1800px  is where our normal styles apply
//  1800           Big Screens

// "37.5em",
//   tabPort: "56.25em",
//   tabLand: "75em",
//   BigScreen: "112.5em",

const breakpoints = {};

const customTheme = {
  ...theme,
  breakpoints: ["37.5em", "56.24em", "75em", "112.5em"],
  font: {
    body: "Inter, sans-serif",
    heading: "Segoe UI, Segoe UI Symbol",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3.2rem",
    "6xl": "4rem",
    "7xl": "5rem",
    "8xl": "6rem",
    "9xl": "7rem",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 900,
  },
  lineHeight: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  icon: {
    ...theme.icons,
  },
  colors: {
    ...theme.colors,
    black: {
      100: "#060608",
    },

    gray: {
      20: "#f5f5f5",
      50: "#333644",
    },
  },
  backgroundColor: {
    ...theme.backgroundColors,
    transparent: "transparent",
    black: {
      50: "#333644",
      70: "#1c1124",
      100: "#060608",
    },
    white: "#ffffff",
    offwhite: {
      50: "#f5f7fa",
      100: "#f8f8f8",
      150: "#f3eded",
    },
  },
};

export default customTheme;
