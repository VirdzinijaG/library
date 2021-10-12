import { useEffect, useState } from "react";
import "./App.css";
import Books from "./Books";
import NewBook from "./NewBook";
import Modal from "./Modal";
import axios from "axios";
import Top from "./Top";

function App() {
  const [books, setBooks] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalId, setModalId] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3003/books").then((response) => {
      setBooks(response.data);
    });
  }, [lastUpdate]);

  const addBook = (book) => {
    axios.post("http://localhost:3003/books", book).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const editBook = (id, book) => {
    axios.put("http://localhost:3003/books/" + id, book)
    .then(() => {
      setLastUpdate(Date.now());
    });
  };

  const deleteBook = (id) => {
    axios.delete("http://localhost:3003/books/" + id).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const getBook = (id) => {
    if (id === 0) {
      return [];
    }
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        return { ...books[i] };
      }
    }
  };

  const showModal = (id) => {
    setModalId(id);
  };


  const hideModal = (id) => {
    setModalId(0);
  }
  return (
    <>
      <Top></Top>
      <NewBook addBook={addBook}></NewBook>
      <Books
        books={books}
        deleteBook={deleteBook}
        showModal={showModal}
      ></Books>
      <Modal id={modalId} editBook={editBook} book={getBook(modalId)} hideModal={hideModal}></Modal>
    </>
  );
}

export default App;
