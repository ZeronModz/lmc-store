'use client';
import { createTheme } from '@mui/material/styles';

export const m3Theme = createTheme({
  palette: {
    mode: 'dark', // M3 ডার্ক থিম
    primary: {
      main: '#D0BCFF', // M3 Primary
    },
    secondary: {
      main: '#CCC2DC',
    },
    background: {
      default: '#141218', // M3 Surface
      paper: '#1D1B20', // M3 Surface Container
    },
    text: {
      primary: '#E6E1E5',
      secondary: '#CAC4D0',
    },
  },
  shape: {
    borderRadius: 16, // M3 এর রাউন্ডেড শেপ
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 }, // M3 বাটন স্টাইল
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1D1B20',
          border: '1px solid #2B2930',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100, // M3 Filled Button Pill Shape
        },
      },
    },
  },
});
