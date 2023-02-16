import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import theme from './../../theme'


export const HeaderNavStyles = styled(AppBar)({
    position: 'fixed',
    border: 0,
    '& toolbar': {
      
      display: 'flex',
      flex: 1,
    },
  }
  
  );

  export const LogoStyles = styled(Typography)({
    backgroundColor: ` ${theme.palette.common.white}`, 
    color: `${theme.palette.common.green}`,
    border: `1px solid ${theme.palette.common.green}`,
    padding: '1rem 2rem',
    borderRadius: '3rem',
    fontSize: '2rem'
  },
  
  );