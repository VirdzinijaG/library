import { useEffect, useState } from "react";
import Book from "./Book";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/books")
    .then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {books.map(book => <Book key={book.id} book={book}></Book> )}
        </div>
      </div>
    </>
  );
}

export default Books;
