import { styled } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import theme from './theme';

export const BodyStyles = styled(Grid)({
    display: 'grid',
    direction: 'column',
    height: '100%',
    gap: 3,
    flex: 1,
    maxHeight: '100vh',
    backgroundColor: `${theme.palette.primary.main}`,
    position: 'absolute',
    [theme.breakpoints.down("md")]: {
      overflow: 'auto',
      maxHeight: '150vh'
  }

  },
  );


  export const ContentStyles = styled(Grid)({
      backgroundColor: `${theme.palette.primary.main}`,
      color: `${theme.palette.common.white}`,
      height: '93vh',
      maxHeight: '100%',
      
      gap: 2
    },
  );

    export const MainContentStyles = styled(Grid)({
        direction: 'row',
        gap: '1rem',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        backgroundColor: `${theme.palette.primary.main}`,
        maxHeight: '45rem',
        padding: '0 3rem',
        [theme.breakpoints.down("sm")] : {
          
        }
  },
  );



  export const ListContainertStyles = styled(Grid)({
   
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    height: '100%',
    backgroundColor: `${theme.palette.primary.main}`,
    [theme.breakpoints.down("md")]: {
    
      marginTop: '5rem'
  }

    },
);


  export const FooterStyles = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.common.white}`,
    maxHeight: '10vh',
    border: '1px solid grey',
    height: '100%',
    width: '100%',
    
    clear: 'both',
   position: 'fixed',
   bottom: 0
  },
  );


 