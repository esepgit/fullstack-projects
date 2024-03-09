import { useState } from "react";

function Form({ createBook, title, handleTitle, author, handleAuthor, edition, handleEdition }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    createBook()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input value={title} onChange={({target}) => handleTitle(target.value)} id="title" className="form-control" type="text" />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input value={author} onChange={({target}) => handleAuthor(target.value)} id="author" className="form-control" type="text" />
      </div>
      <div className="mb-3">
        <label htmlFor="edition" className="form-label">
          Edition
        </label>
        <input value={edition} onChange={({target}) => handleEdition(target.value)} id="edition" className="form-control" type="number" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

export default Form