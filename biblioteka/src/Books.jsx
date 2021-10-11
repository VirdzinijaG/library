import { useEffect, useState } from "react";

function Books() {
  function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      axios.get("http;//localhost:3003/books").then((response) => {
        setBooks(response.data);
      });
    }, []);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <Book></Book>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
