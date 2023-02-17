
import { TaskListIconBoxStyle, TaskListItemIconCheckStyle, TaskListItemIconDeleteStyle, TaskListItemStyle, TaskListItemTextStyle, } from './task.styles';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';




const Task = ({note, onClick, onDelete, onComplete }) =>{
    return(
        
            <TaskListItemStyle >
                <TaskListItemTextStyle  primary={note.text} onClick={ onClick}   />

                <TaskListIconBoxStyle>
                    <TaskListItemIconCheckStyle>
                        <CheckIcon aria-label='Complete Task Item' fontSize='inherit' onClick={   onComplete }  />
                    </TaskListItemIconCheckStyle>

                    <TaskListItemIconDeleteStyle>
                        <DeleteIcon fontSize='inherit' onClick={ onDelete} />
                    </TaskListItemIconDeleteStyle>
                </TaskListIconBoxStyle>

            </TaskListItemStyle>
            
       
    );
}

export default Task;