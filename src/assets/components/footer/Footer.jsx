import "./footer.css";

function Footer() {
  return (
    <div className="footer-body-div">
      <div className="line-div"></div>
      <div className="container text-center">
        <div className="row">
          <div className="col footer-col-1">FOLLOW</div>
          <div className="col footer-col-1">CONTACT</div>
          <div className="col footer-col-1">PURCHASE</div>
        </div>
        <div className="row">
          <div className="col footer-col-text">
            <a
              id="footer-link"
              target="_blank"
              rel="noreferrer"
              href="https://open.spotify.com/artist/55PSX5vztaOftFhmVG3Q2D"
            >
              SPOTIFY
            </a>
          </div>
          <div className="col footer-col-text">
            {" "}
            <a
              id="footer-link"
              className="nav-link"
              href="mailto:kaltrunnerband@gmail.com?subject=Hello!"
            >
              KALTRUNNERBAND@GMAIL.COM
            </a>
          </div>
          <div className="col footer-col-text">
            <a
              id="footer-link"
              target="_blank"
              className="nav-link"
              href="https://www.aurisapothecary.org/shop/kaltrunner-dirteater-ii/"
            >
              AURISAPOTHECARY.ORG
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col footer-col-text">
            <a
              id="footer-link"
              target="_blank"
              rel="noreferrer"
              href="https://kaltrunner.bandcamp.com/"
            >
              BANDCAMP
            </a>
          </div>
          <div className="col footer-col-text"></div>
          <div className="col footer-col-text"></div>
        </div>
        <div className="row">
          <div className="col footer-col-text">
            <a
              id="footer-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/kaltrunner/?hl=en"
            >
              INSTAGRAM
            </a>
          </div>
          <div className="col footer-col-text"></div>
          <div className="col footer-col" id="copy-text">
            ©2023 –{" "}
            <a
              id="footer-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.erikmrussell.com/"
            >
              Erik Russell
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
