import { useState, useEffect } from 'react'
import Form from './components/Form'
import Notes from './components/Notes'
import noteService from './services/noteService'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAll().then(response => {
      setNotes(response)
    })
  }, [])

  const createNote = (inputNote) => {
    noteService.create(inputNote).then((note) => {
      setNotes(notes.concat(note))
    });
  }

  const deleteNote = (id) => {
    noteService.deleteNote(id).then(response => {
      const updatedNotes = notes.filter(n => n.id !== id)
      setNotes(updatedNotes)
    })
  }

  const changeImportance = (id) => {
    noteService.changeImportance(id).then(response => {
      const updatedNotes = notes.map(n => n.id === id ? response : n)
      setNotes(updatedNotes)
    })
  }

  if (notes.length !== undefined) {
    return (
      <div className="border-2 flex flex-col bg-green-200 h-full m-8 pb-2 rounded-md">
        <h1 className="text-center text-2xl font-bold my-2">Notes app</h1>
        <Form createNote={createNote} />
        {notes.map((note) => <Notes key={note.id} note={note} deleteNote={deleteNote} changeImportance={changeImportance} />)}
      </div>
    );
  }

  
}

export default App
