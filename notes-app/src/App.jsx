import { useState } from 'react'
import Form from './components/Form'
import Notes from './components/Notes'

function App() {
  const [notes, setNotes] = useState('')

  return (
    <div className="border-2 flex flex-col bg-green-200 h-full m-8">
      <h1 className="text-center text-2xl font-bold my-2">Notes app</h1>
      <Form />
      <Notes />
    </div>
  );
}

export default App
