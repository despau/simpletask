import  { useState, useEffect } from 'react'

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import { API, graphqlOperation } from "aws-amplify";
import { createNote, deleteNote, updateNote } from './graphql/mutations';
import { listNotes } from './graphql/queries'


import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { BodyStyles, ContentStyles, MainContentStyles, FooterStyles, ListContainertStyles } from './App.styles';

import Typography from '@mui/material/Typography';

import HeaderNav from './components/header-nav/header-nav.component';
import TaskForm from './components/task-form/task-form.component';
import TaskList from './components/task-list/task-list.component';
import CompletedTaskList from './components/task-list/completed-task-list.component';





const App = ( { signOut, user } ) => {

  const [noteId, setNoteId] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [completedNotes, setCompletedNotes] = useState([]);

  useEffect( () => {
    
    getAllNotes();
    

  }, [])


  const getAllNotes = async () => {
    const result = await API.graphql( graphqlOperation ( listNotes ) );
    const allNotes = result.data.listNotes.items;
    
    //separate notes.
    const inCompleteNotes = allNotes.filter( note => note.completed === false );
    setNotes(inCompleteNotes);

    const CompleteNotes = allNotes.filter( note => note.completed === true );
    setCompletedNotes(CompleteNotes);
     
  }


  const handleChangeNote = (e) => {
    e.preventDefault();
    setNote(e.target.value);
    
  }

  const hasExistingNote = () => {
    
    if(noteId){
      //get boolean value if noteExists
      const noteExists = notes.findIndex(note => note.id === noteId) > -1
      return noteExists
    }
    return false;
  }

  const handleSubmitNote = async (e) => {
    e.preventDefault();

    const input = {
      text: note,
      completed: false
    }

    if( hasExistingNote() ) {
      
      handleUpdateNote();

    } else {

      const createNoteResult = await API.graphql( graphqlOperation( createNote, {input} ) );
      const newNote = createNoteResult.data.createNote;
      const updatedNotes = [ newNote, ...notes  ];
      setNotes( updatedNotes );
      setNote('');
      setNoteId('');
    }

  }

  const handleDeleteNote = async noteId => {
    const input = { id: noteId}
    const deletedNoteResult = await API.graphql( graphqlOperation( deleteNote, {input } ) );
    const deletedNoteId = deletedNoteResult.data.deleteNote.id;


    const updatedNotes = notes.filter( note => note.id !== deletedNoteId );
    setNotes(updatedNotes);

  }

  const handleSetNote = ({id, text}) => {
    setNoteId(id);
    setNote(text);
  }

  const handleUpdateNote = async () => {
    
  
    const input = {id:noteId, text:note}
   const updatedNoteResult = await API.graphql(graphqlOperation(updateNote, {input}));
   const updatedNote = updatedNoteResult.data.updateNote;

    const noteIndex = notes.findIndex( note => note.id === updatedNote.id);
   const updatedNotesArray = [
      ...notes.slice(0, noteIndex),
      updatedNote,
      ...notes.slice(noteIndex +1)
   ]
   setNotes(updatedNotesArray);
   setNote('');
   setNoteId('')
  }

  const handleCompleteNote = async item => {
      
      const input = {
        id: item.id,
        completed: true
      }

      const updatedNoteResult = await API.graphql(graphqlOperation(updateNote, {input}));
      const updatedNote = updatedNoteResult.data.updateNote;
     

      const markedNote = notes.filter ( note => note.id !== updatedNote.id);
      console.log("MARKED NOTE: ", markedNote)
  
      setNotes(markedNote);
      setCompletedNotes([updatedNote, ...completedNotes]);
      setNote('');
      setNoteId('')

  }

  const handleRestoreNote = async item => {
      
    const input = {
      id: item.id,
      completed: false
    }

    const updatedNoteResult = await API.graphql(graphqlOperation(updateNote, {input}));
    const updatedNote = updatedNoteResult.data.updateNote;
   
    const markedNote = completedNotes.filter ( note => note.id !== updatedNote.id);

    setNotes([updatedNote, ...notes]);
    setCompletedNotes(markedNote);   
    
    setNote('');
    setNoteId('')

}



  return (
    <ThemeProvider theme={theme}>
      <BodyStyles xs={12} container >
        {/* header */}
        <HeaderNav xs={12} item onClick={ signOut} />
        {/* main body */}
        <ContentStyles xs={12} item container >
            
            {/* Welcome */}
            <Typography variant='h2' className='welcome' marginLeft='3rem' marginTop='9rem'>Welcome to your TASKS, {user.username}</Typography>
            {/* main-content */}
            <MainContentStyles  item container  >
              {/* Completed List */}
              <ListContainertStyles order={{ xs: 3, sm: 1, md: 1, lg: 1 }} gap={3} xs={10} sm={4} md={3} item width='30%' bgcolor='green'>
                
                <CompletedTaskList completedNotes={completedNotes} handleRestoreNote={handleRestoreNote} />
                
              </ListContainertStyles>

              {/* Form + List */}
              <ListContainertStyles order={{ xs: 1, sm: 3, md: 1, lg: 1 }} xs={10} sm={7} md={8} item container width='60%'   bgcolor='blue'>

                {/* form */}
                <TaskForm  item container note={note} noteId={noteId} onSubmit={handleSubmitNote} inputChange={handleChangeNote} />
                {/* <Grid item >
                    
                </Grid> */}

                {/* list */}
                <TaskList 
                  item 
                  container
                  notes={notes}
                  note={note}
                  noteId={noteId}
                  handleSetNote={handleSetNote}
                  handleDeleteNote ={handleDeleteNote }
                  handleCompleteNote={handleCompleteNote}
                />
                {/* <Grid item>
                    
                </Grid> */}
              </ListContainertStyles>

            </MainContentStyles>
        </ContentStyles>

        {/* footer */}
       <FooterStyles xs={12} item >
        <Typography variant='h4' paddingTop='2rem'> Build for you by yours truly 2023</Typography>         
       </FooterStyles>

     </BodyStyles>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
