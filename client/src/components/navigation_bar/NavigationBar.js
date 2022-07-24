import "./NavigationBar.css";
import { Link } from "react-router-dom";

export default function NavigationBar(props) {
  return (
    <nav className="navbar navbar-dark fixed-top navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Zen's Time
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
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/menu">
                MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="d-flex buttons">
            <Link to="/delivery">
              {" "}
              <button className="nav-button btn btn-outline-light me-3">
                ORDER DELIVERY
              </button>{" "}
            </Link>
            <Link to="/book">
              {" "}
              <button className="nav-button btn btn-outline-light">
                {" "}
                BOOK A TABLE
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
