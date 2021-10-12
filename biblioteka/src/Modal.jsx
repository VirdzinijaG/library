import { useState } from "react";

function Modal({ id, book }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [pages, setPages] = useState("");

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

  const insert = () => {
    //    addBook({
    //         title: title,
    //         author: author,
    //         category: category,
    //         pages: pages
    //     });
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
                <h5 className="card-title">New Book</h5>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "title")}
                    value={title}
                  />
                  <small className="form-text text-muted">
                    Enter new book title
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
                    Enter author name
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
                    Enter books category
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
                    Enter books page count
                  </small>
                </div>
                <button type="button" className="btn btn-info" onClick={insert}>
                  Add Book
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
