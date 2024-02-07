import noteService from "../services/noteService";
import { useState, useEffect } from "react";
import TrashIcon from "./TrashIcon";

const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAll().then(response => {
      setNotes(response)
    })
  }, [])

  return (
    <>
      {notes.map((note) => {
        return (
          <div className="flex justify-between">
            <div
              key={note.id}
              className="cursor-pointer w-[90%] hover:bg-slate-300 bg-slate-50 my-2 ml-8 rounded-md pl-2"
            >
              {note.content}{" "}
              {note.important ? (
                <span className="font-bold">important</span>
              ) : (
                ""
              )}
            </div>
            <button className="hover:bg-red-600 bg-red-400 rounded-md my-2 mr-7">
              <TrashIcon />
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Notes