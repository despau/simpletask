
import styled from '@emotion/styled';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import theme from '../../theme';




export const TaskBoxStyle = styled(Box)({
    display: 'flex',
});

export const TaskListIconBoxStyle = styled(Box)({

});

export const TaskListItemIconCheckStyle = styled(ListItemIcon)({
    color: `${theme.palette.common.green}`,
    fontSize: '2.2rem',
    [theme.breakpoints.down("sm")] : {
        fontSize: '2rem'
       }
});
export const TaskListItemIconDeleteStyle = styled(ListItemIcon)({
    color: `${theme.palette.common.red}`,
    fontSize: '2.2rem',
    [theme.breakpoints.down("sm")] : {
        fontSize: '2rem'
       }
});

export const TaskListItemStyle = styled(ListItem)({
    border: `1px solid ${theme.palette.common.green}`,
    marginBottom: '1rem',
    borderRadius: '3rem',
    [theme.breakpoints.down("sm")] : {
        fontSize: '1rem',
        padding: '.2rem .5rem',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column'
       }
});

export const TaskListItemTextStyle = styled(ListItemText)({
});

export const CompletedTaskListItemTextStyle = styled(ListItemText)({
    textDecoration: 'line-through',
    color: `${theme.palette.common.red}`,
    [theme.breakpoints.down("sm")] : {
        fontSize: '1rem',
        padding: '.2rem .5rem',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column'
       }
});