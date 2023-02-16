import react from 'react';
import { TaskListBoxStyle, TaskListStyle, } from './task-list.styles';
import Task from './../task/task.component'
import Typography from '@mui/material/Typography';



const TaskList = ( {notes, handleSetNote, handleDeleteNote,  handleCompleteNote } ) =>{

    console.log('printing notes', notes);
    
    return(
        <TaskListBoxStyle item>
            <Typography variant='h3' >Your Tasks</Typography>
           <TaskListStyle  >

                    {notes.length > 0  ? notes.map(note=>(
                        <Task note={note} onClick={ ()=>handleSetNote(note) } onDelete={ ()=>handleDeleteNote(note.id)}  onComplete={()=>handleCompleteNote(note)} />
                    )) : <h2> You have no notes at this moment</h2>}

           </TaskListStyle>
        </TaskListBoxStyle>
       
    );
}

export default TaskList;