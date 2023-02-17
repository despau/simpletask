import { render, screen } from '@testing-library/react';
// import { logRoles } from '@testing-library/react'; 
import Task from './task.component';

describe('Testing the code', ()=> {

    test('Task Item Loads Correctly in the Document', () => {
        const note="Holla Task app";
        const mockClick = jest.fn();
        render(<Task note={note} onClick={mockClick} />);
    
    
        const textElement = screen.getByRole('listitem', {aria: 'Task Item Text'})
        expect(textElement).toBeInTheDocument();
    
        const checkIcon = screen.getByLabelText('Complete Task Item', {aria: 'Complete Task Item'})
        expect(checkIcon).toBeInTheDocument();
    
        const deleteIcon = screen.getByTestId('DeleteIcon', {aria: 'Delete Task Item'})
        expect(deleteIcon).toBeInTheDocument();
    
    
    } )

})