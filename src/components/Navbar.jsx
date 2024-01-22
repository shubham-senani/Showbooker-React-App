import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav
      className="sticky-top z-3 navbar navbar-expand-lg bg-body-tertiary navbar-dark"
      style={{
        background:
          "linear-gradient(43deg, rgba(38,25,123,1) 0%, rgba(117,13,122,1) 100%)",
        height: "75px",
      }}
    >
      <div
        className="container-fluid"
        style={{
          background:
            "linear-gradient(43deg, rgba(38,25,123,1) 0%, rgba(117,13,122,1) 100%)",
        }}
      >
        <Link className="navbar-brand me-4" to={'/'}>
          <img src={logo} width={50} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <Link
                className="nav-link active fs-5 fw-medium"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link fs-5 fw-medium" to="/">
                Movies
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link fs-5 fw-medium" to="/">
                Web Series
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link fs-5 fw-medium" to="/">
                Watchlist
              </Link>
            </li>
          </ul>
          <form className="d-flex mb-1" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search....."
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
