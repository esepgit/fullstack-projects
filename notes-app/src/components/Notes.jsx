
import TrashIcon from "./TrashIcon";

const Notes = ({ note, deleteNote, changeImportance }) => {

  return (
    <>
      <div className="flex">
        <div
          onClick={() => changeImportance(note.id)}
          className="cursor-pointer lg:w-[95%] w-[90%] hover:bg-slate-300 bg-slate-50 my-2 ml-8 rounded-md pl-2"
        >
          {note.content}{" "}
          {note.important ? (
            <span className="font-bold">important</span>
          ) : (
            ""
          )}
        </div>
        <button className="hover:bg-red-600 bg-red-400 rounded-md my-2 mr-7 ml-2" onClick={() => deleteNote(note.id)}>
          <TrashIcon />
        </button>
      </div>
    </>
  );
}

export default Notes