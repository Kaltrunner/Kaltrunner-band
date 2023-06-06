import "./header.css";
import Clock from "../clock/Clock";

function Header() {
  return (
    <div className="header-body-div">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav-bar">
        <div className="container-fluid">
          <p className="navbar-brand">[ ]</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link under-line"
                  id="nav-links"
                  aria-current="page"
                  href="#"
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link under-line"
                  id="nav-links"
                  href="mailto:erikrussells@gmail.com?subject=Hello!"
                >
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link under-line" id="nav-links" href="#">
                  ALBUM ART
                </a>
              </li>
              <li className="nav-item clock" id="nav-links">
                <Clock />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
