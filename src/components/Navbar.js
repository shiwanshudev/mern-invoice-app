import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/add">
              Add Items
            </Link>
            <Link className="nav-link" to="/list">
              List Items
            </Link>
            <Link className="nav-link" to="/invoice">
              Invoices
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
