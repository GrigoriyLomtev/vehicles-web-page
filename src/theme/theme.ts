import { createTheme } from '@mui/material';

// Main theme
export const theme = createTheme({
  palette: {
    common: {
      white: '#ffffff',
    },
    primary: {
      main: '#6c5fc7',
      light: '#452650',
      dark: '#5747b9',
      contrastText: '#F6F6F8',
    },
    secondary: {
      main: '#3C74DD',
    },
    background: {
      default: '#faf9fb',
    },
    text: {
      primary: '#2B2233',
      secondary: '#3e3446',
      disabled: '#80708f',
    },
    success: {
      main: '#6c5fc7',
      light: '#543862',
      dark: '#5747b9',
      contrastText: '#F6F6F8',
    },
    grey: {
      '100': '#452650',
      //   '100': '#dbd6e1',
    },
  },
  mixins: {
    toolbar: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      '@media (max-width:1260px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media (max-width:950px)': {
        gridTemplateColumns: '1fr',
        padding: '0 50px',
      },
    },
  },
});
