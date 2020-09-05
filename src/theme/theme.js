import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  //   breakpoints,
  font: {
    body: 'Inter, sans-serif',
    heading: 'Segoe UI, Segoe UI Symbol',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3.2rem',
    '6xl': '4rem',
    '7xl': '5rem',
    '8xl': '6rem',
    '9xl': '7rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 900,
  },
  lineHeight: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  icon: {
    ...theme.icons,
  },
  colors: {
    ...theme.colors,
    black: '#000000',
    gray: {
      50: '#333644',
    },
    green: {
      50: '#007065',
      100: '#1e6262',
      150: '#236969',
    },
  },
  backgroundColor: {
    ...theme.backgroundColors,
    transparent: 'transparent',
    black: {
      50: '#333644',
    },
    white: '#ffffff',
    offwhite: {
      50: '#f5f7fa',
      100: '#f8f8f8',
      150: '#f3eded',
    },
  },
};

export default customTheme;
