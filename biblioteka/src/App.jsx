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
  const [booksCount, setBooksCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/books").then((response) => {
      setBooks(response.data);
    });
  }, [lastUpdate]);


  // statistic
  // all books
  useEffect(() => {
    axios.get('http://localhost:3003/books/count')
      .then((response) => {
        setBooksCount(response.data[0].booksCount);
      })
  }, [lastUpdate])

  // category count
  useEffect(() => {
    axios.get('http://localhost:3003/books/category-count')
      .then((response) => {
        console.log(response.data);
        setCategoryCount(response.data);
      })
  }, [lastUpdate])

  const addBook = (book) => {
    axios.post("http://localhost:3003/books", book).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const editBook = (id, book) => {
    axios.put("http://localhost:3003/books/" + id, book).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const deleteBook = (id) => {
    axios.delete("http://localhost:3003/books/" + id).then(() => {
      setLastUpdate(Date.now());
    });
  };


  // pataisytas return, nes console mete klaidas
  const getBook = (id) => {
    if (id === 0) {
      return {
        title: '',
        author: '',
        category: '',
        pages: '',
      };
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
  };


  const sort = by => {
    const booksCopy = books.slice();
    if ('title' === by) {
      booksCopy.sort((a, b) => {
        if (a.title > b.title) {
          return 1
        }
        if (a.title < b.title) {
          return -1
        }
        return 0
      })
      setBooks(booksCopy)
    }
    if ('pages' === by) {
      booksCopy.sort((a, b) => a.pages - b.pages)


      setBooks(booksCopy)
    }
  }

  return (
    <>
      <Top sort={sort} booksCount={booksCount} categoryCount={categoryCount} ></Top>
      <NewBook addBook={addBook}></NewBook>
      <Books books={books} deleteBook={deleteBook} showModal={showModal}></Books>
      <Modal id={modalId} editBook={editBook} book={getBook(modalId)} hideModal={hideModal}></Modal>
    </>
  );
}

export default App;
