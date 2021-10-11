import Book from "./Book";

function Books({ books, deleteBook, showModal }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              deleteBook={deleteBook}
              showModal={showModal}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
