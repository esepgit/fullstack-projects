import { useState } from "react"

const Form = () => {
const [inputNote, setInputNote] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit} className="my-2 flex flex-col justify-between items-center">
      <input className="hover:bg-slate-100 w-60 my-4 rounded-md py-1 pl-2" value={inputNote} type="text" placeholder="Your text here..." onChange={(e) => setInputNote(e.target.value)} />
      <button className="hover:bg-green-600 bg-green-400 text-white rounded-md p-1 w-60">Create</button>
    </form>
  )
}

export default Form