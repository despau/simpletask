
import { CompletedTaskListBoxStyle, CompletedTaskListStyle, } from './task-list.styles';
import CompletedTask from './../task/completed-task.component';
import  Typography  from '@mui/material/Typography';



const CompletedTaskList = ({ completedNotes, handleRestoreNote }) =>{
    return(
        <CompletedTaskListBoxStyle>
            <Typography variant='h3' >Your Completed Tasks</Typography>
           <CompletedTaskListStyle >

           {
                completedNotes.length  ? completedNotes.map(note=>(
                <CompletedTask key={note.id} text={note.text} onClick={ ()=>handleRestoreNote(note) } note={note} /> )
                ) : <h2> No completed notes at this time </h2> 
            }

           </CompletedTaskListStyle>
        </CompletedTaskListBoxStyle>
       
    );
}

export default CompletedTaskList;