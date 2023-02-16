
import { TaskListItemStyle, CompletedTaskListItemTextStyle, } from './task.styles';




const ComppletedTask = ({ text }) =>{
    
    return(
        
            <TaskListItemStyle>
                <CompletedTaskListItemTextStyle primary={text} />
            </TaskListItemStyle>
            
       
    );
}

export default ComppletedTask;