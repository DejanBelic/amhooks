import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm'

const NotesApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])
    // const [notes, setNotes] = useState([]);



    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'));
        if (notes) {
            dispatch({ action: "POPULATE_NOTES", notes })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const removeNote = (title) => {
        dispatch({
            type: "REMOVE_NOTE",
            title
        })
    }

    return ( 
            <div> 
                <h1> Notes </h1>
                <NoteList  notes={notes} removeNote={removeNote} />
                <AddNoteForm dispatch={dispatch} />
            </div > 
            )
  }

        export { NotesApp as default }