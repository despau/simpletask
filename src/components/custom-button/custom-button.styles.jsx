import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import theme from './../../theme'


export const CustomButtonStyles = styled(Button)({
   
    border: `1px solid ${theme.palette.common.green}`,
    borderRadius: `4em`,
    backgroundColor: `${theme.palette.common.white}`,
    padding: '1.2rem 4rem',
    marginLeft: 'auto',
    fontSize: '1.2rem', 
    fontWeight: 900,
    '&:hover':{
      backgroundColor: `${theme.palette.common.white}`,
    },
    [theme.breakpoints.down("md")]: {
      padding: '1rem 2rem',
      marginLeft: 'auto',
      fontSize: '1rem', 
  }
  },
  
  );