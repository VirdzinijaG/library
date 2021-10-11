function Book({ book }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Book;
