function Top({ sort }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card m-3">
              <div className="card-body">
                <h5 className="card-title">Sort by</h5>
                <button type="button" className="btn btn-info m-1" onClick={() => sort('title')}>Title</button>
                <button type="button" className="btn btn-info m-1" onClick={() => sort('pages')}>Pages</button>
              </div>
            </div>
          </div>
          <div className="col">
            2 of 2
          </div>
        </div>
      </div>
    </>
  );
}
export default Top;
