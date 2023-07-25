import { Link } from "react-router-dom";
import "./albumnav.css";

function AlbumNav() {
  return (
    <div className="album-nav-body-div">
      <Link to="/" id="nav-link" className="nav-under-line">
        HOME
      </Link>
    </div>
  );
}

export default AlbumNav;
