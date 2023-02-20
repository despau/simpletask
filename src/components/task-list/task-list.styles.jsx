
import { styled} from '@mui/material';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import theme from './../../theme'




export const TaskListBoxStyle = styled(Box)({
    backgroundColor: 'white',
    border: 0,
    borderRadius: `2rem`,
    color: `${theme.palette.primary.main}`,
    padding: '2rem 3rem',
    width: '100%',
    height: '67%',
    [theme.breakpoints.down("sm")]: {
        marginBottom: '10rem'
    }

});

export const CompletedTaskListBoxStyle = styled(Box)({
    backgroundColor: `${theme.palette.common.white}`,
    border: 0,
    borderRadius: `2rem`,
    color: `${theme.palette.primary.main}`,
    padding: '2rem 3rem',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down("md")]: {
        marginBottom: '5rem'
    }

});


export const TaskListStyle = (styled(List)) ({
    margin: '1rem ',
     display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '80%',
    overflow: 'auto',
    paddingBottom: '1rem',
    
});


export const CompletedTaskListStyle = (styled(List)) ({
    margin: '1rem 0',
     display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    overflow: 'auto',
    paddingBottom: '1rem',
    

});



