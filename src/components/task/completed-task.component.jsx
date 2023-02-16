
import { TaskListItemStyle, CompletedTaskListItemTextStyle, CompletedTaskListItemIconDeleteStyle } from './task.styles';
import RestoreIcon from '@mui/icons-material/Restore';



const ComppletedTask = ({ text, onClick }) =>{
    
    return(
        
            <TaskListItemStyle>
                <CompletedTaskListItemTextStyle primary={text} />
                <CompletedTaskListItemIconDeleteStyle>
                        <RestoreIcon  fontSize='inherit' onClick={ onClick } />
                </CompletedTaskListItemIconDeleteStyle>
            </TaskListItemStyle>
            
       
    );
}

export default ComppletedTask;