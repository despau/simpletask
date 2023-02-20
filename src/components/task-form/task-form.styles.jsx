import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import theme from './../../theme'


export const TaskFormStyles = styled(Grid)({
    backgroundColor: `${theme.palette.common.white}`,
    border: 0,
    borderRadius: `2rem`,
    color: `${theme.palette.common.green}`,
    padding: '2rem 3rem',
    width: '100%',
    [theme.breakpoints.down("md")]: {
      marginBottom: '1rem',
    
  }
  },
  
  );

  export const InputBoxStyles = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '1rem',
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      gap: 2,
      justifyContent: 'space-around',
      alignItems: 'center',
  }
  },
  
  );

  export const InputStyles = styled(Input)({
    width: '100%',
    flex: 1,
    border: `1px solid ${theme.palette.common.green}`,
     borderRadius: '3rem',
     padding: '.5rem 2rem',
     marginRight: '3rem',
     [theme.breakpoints.down("sm")] : {
      fontSize: '1.2rem',
      padding: '.4rem 1.5rem',
      marginBottom: '1rem',
     }
  },
  
  );