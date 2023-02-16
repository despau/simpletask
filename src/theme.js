import { createTheme } from '@mui/material/styles';

const arcGreen = '#185864';
const arcRed = '#a32040';
const arcWhite = '#f7f7f7';




const theme = createTheme({
  palette: {
    common: {
        green: `${arcGreen}`,
        red: `${arcRed}`,
        white: `${arcWhite}`,
    },
    primary: {
        main: `${arcGreen}`,
        
    },
    secondary: {
        main: `${arcRed}`,
    },
    text: {
      primary: `${arcGreen}`,
    },
    secondary: {
      main: `${arcRed}`,
  },
  },
  typography: {
    
    fontSize: 10,
    h2: {
        fontWeight: 500,
    },
    h3: {
        fontWeight: 600,
    },
    body1: {
      fontSize: '1.6rem'
    }
    
  },
});

export default theme;