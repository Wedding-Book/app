'use client';
import {createTheme} from '@mui/material/styles';
import {Roboto} from 'next/font/google';
import {responsiveFontSizes} from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

let theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontWeightRegular: '400'
  },
  palette: {
    primary: {
      main: '#DFB2BA',
      light: '#B7D6D8',
      dark: '#BE8D97',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#8e86a4',
      light: '#b9b3c4',
      dark: '#696082',
    },
    error: {
      main: '#ff8ba1',
      light: '#ffc2d3',
      dark: '#f44336',
    },
    warning: {
      main: '#f7a038',
      light: '#fff8cc',
      dark: '#ffd966',
    },
    info: {
      main: '#8e86a4',
      light: '#b9b3c4',
      dark: '#696082',
    },
    success: {
      main: '#79b070',
      light: '#d3f7d3',
      dark: '#7aff7a',
    },
  }
});

theme = responsiveFontSizes(theme)

export default theme;
