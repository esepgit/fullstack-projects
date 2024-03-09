
function BookList({ books, deleteBook, updateBook }) {

  const handleDelete = (id) => {
    deleteBook(id)
  }

  const handleUpdate = (id) => {
    updateBook(id, title, author, edition);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.edition}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(book.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(book.id)}
                  className="btn btn-dark"
                >
                  Update
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList