function Book({ book, deleteBook, showModal }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <h6>{book.author}</h6>
          <span className="badge badge-pill badge-secondary m-1 p-2">
            category: {book.category}
          </span>
          <span className="badge badge-pill badge-secondary m-1 p-2">
            pages: {book.pages}
          </span>
          <div className="form-group mt-3">
            <button
              type="button"
              className="btn btn-danger m-1"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-success m-1"
              onClick={() => showModal(book.id)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
