
import { TaskFormStyles, InputBoxStyles, InputStyles  } from './task-form.styles';
import Typography from '@mui/material/Typography';
import CustomButton from './../custom-button/custom-button.component'




const TaskForm = ({note, noteId, onSubmit, inputChange} ) => {
  
  return (
    
    <TaskFormStyles component='form' container onSubmit={onSubmit}>
        <Typography  variant='h3' >Add a Task</Typography>
        <InputBoxStyles >
            <InputStyles name='task-input' required type='text' disableUnderline value={note}  onChange= {inputChange}  />
            <CustomButton  type='submit' label={ noteId ? "Update Note" : "Add note" } />
        </InputBoxStyles>
        
    </TaskFormStyles>
  )
};

export default TaskForm;
