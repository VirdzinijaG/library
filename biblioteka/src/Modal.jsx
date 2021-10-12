import { useState, useEffect } from "react";

function Modal({ id, book, editBook, hideModal }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [pages, setPages] = useState("");

  useEffect(() => {
    setTitle(book.title);
    setAuthor(book.author);
    setCategory(book.category);
    setPages(book.pages);
  }, [book]);

  const control = (e, what) => {
    switch (what) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "pages":
        setPages(e.target.value);
        break;
    }
  };

  const edit = () => {
    editBook(id, {
      title: title,
      author: author,
      category: category,
      pages: pages,
    });
    hideModal();
    setTitle("");
    setAuthor("");
    setCategory("");
    setPages("");
  };

  if (id === 0) {
    return null;
  }

  return (
    <div className="edit-modal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card m-3">
              <div className="card-body">
                <h5 className="card-title">Edit Book</h5>
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" onChange={(e) => control(e, "title")} value={title} />
                  <small className="form-text text-muted">
                    Edit book title
                  </small>
                </div>
                <div className="form-group">
                  <label>Author</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "author")}
                    value={author}
                  />
                  <small className="form-text text-muted">
                    Edit author name
                  </small>
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "category")}
                    value={category}
                  />
                  <small className="form-text text-muted">
                    Edit books category
                  </small>
                </div>
                <div className="form-group">
                  <label>Pages</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "pages")}
                    value={pages}
                  />
                  <small className="form-text text-muted">
                    Edit books page count
                  </small>
                </div>
                <button
                  type="button"
                  className="btn btn-info m-1"
                  onClick={edit}
                >
                  Edit Book
                </button>
                <button
                  type="button"
                  className="btn btn-danger m-1"
                  onClick={hideModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
