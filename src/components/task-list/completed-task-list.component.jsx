
import { CompletedTaskListBoxStyle, CompletedTaskListStyle, } from './task-list.styles';
import CompletedTask from './../task/completed-task.component';
import  Typography  from '@mui/material/Typography';



const CompletedTaskList = ({ completedNotes }) =>{
    return(
        <CompletedTaskListBoxStyle>
            <Typography variant='h3' >Your Completed Tasks</Typography>
           <CompletedTaskListStyle >

           {
                completedNotes.length > 0  ? completedNotes.map(note=>(
                <CompletedTask text={note.text}  /> )
                ) : <h2> No completed notes at this time </h2> 
            }

           </CompletedTaskListStyle>
        </CompletedTaskListBoxStyle>
       
    );
}

export default CompletedTaskList;