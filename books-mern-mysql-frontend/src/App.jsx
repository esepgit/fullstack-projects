import { useState } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState(1);

  const handleTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const handleAuthor = (newAuthor) => {
    setAuthor(newAuthor);
  };

  const handleEdition = (newEdition) => {
    setEdition(newEdition);
  };

  const getBooks = () => {
    fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBooks();
  }, []);

  const createBook = () => {
    // validación de datos
    if (title === "" || author === "" || edition <= 0) {
      alert("Invalid fields");
    } else {
      // consulta
      fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, edition }),
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      setTitle("");
      setAuthor("");
      setEdition(1);
      getBooks();git status
    }
  };

  const deleteBook = (id) => {
    fetch(`http://localhost:3000/api/books/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setBooks(books.filter((b) => b.id !== id));
  };

  const updateBook = (id) => {
    // validación de datos
    if (title === "" || author === "" || edition <= 0) {
      alert("Invalid fields");
    } else {
      // consulta
      fetch(`http://localhost:3000/api/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, edition }),
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      setBooks(
        books.map((b) => (b.id === id ? { id, title, author, edition } : b))
      );
      setTitle("");
      setAuthor("");
      setEdition(1);
    }
  };

  return (
    <>
      <Navbar brand="Library App" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Book List</h2>
            <BookList
              books={books}
              deleteBook={deleteBook}
              updateBook={updateBook}
            />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Book Form</h2>
            <Form
              createBook={createBook}
              title={title}
              handleTitle={handleTitle}
              author={author}
              handleAuthor={handleAuthor}
              edition={edition}
              handleEdition={handleEdition}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
