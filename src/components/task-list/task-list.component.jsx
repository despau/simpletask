import react from 'react';
import { TaskListBoxStyle, TaskListStyle, } from './task-list.styles';
import Task from './../task/task.component'
import Typography from '@mui/material/Typography';



const TaskList = ( {notes, handleSetNote, handleDeleteNote,  handleCompleteNote } ) =>{
    
    return(
        <TaskListBoxStyle item>
            <Typography variant='h3' >Your Tasks</Typography>
           <TaskListStyle data-test='task-list' >

                    {notes.length > 0  ? notes.map(note=>(
                        <Task key={note.id} note={note} onClick={ ()=>handleSetNote(note) } onDelete={ ()=>handleDeleteNote(note.id)}  onComplete={()=>handleCompleteNote(note)} />
                    )) : <h2> You have no notes at this moment</h2>}

           </TaskListStyle>
        </TaskListBoxStyle>
       
    );
}

export default TaskList;