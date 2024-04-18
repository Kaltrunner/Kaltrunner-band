// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AlbumNav from "../albumNav/AlbumNav";
import { ScrollToTop } from "react-router-scroll-to-top";
import "./albumart.css";

function AlbumArt() {
  return (
    <div className="album-art-body-div">
      <ScrollToTop />
      <div className="album-overlay"></div>
      <AlbumNav />

      <div className="album-text">
        <h1 className="album-art-header">ALBUM ART</h1>

        <div className="row-container">
          <Row>
            <Col>
              <img id="art" src="" alt="" />
              <h6 className="album-title"></h6>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <img id="art" src="https://f4.bcbits.com/img/a3319275606_2.jpg" alt="" />
              <h6 className="album-title">B-sides Vol. 2 </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <img id="art" src="https://f4.bcbits.com/img/a0533061807_2.jpg" alt="" />
              <h6 className="album-title">B-sides Vol. 1 </h6>
            </Col>
            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a1098159222_16.jpg"
                alt=""
              />
              <h6 className="album-title">Plague – 12/12/23</h6>
              {/* <div className="album-title-links-div-spotify">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://open.spotify.com/album/4QsCuUmyHgbuHkhhetPQvm"
                >
                  <h4 className="link-title link-title-under-line">Spotify</h4>
                </a>
              </div> */}

              {/* <div className="album-title-links-div-bandcamp">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://kaltrunner.bandcamp.com/album/plague"
                >
                  <h4 className="link-title link-title-under-line">Bandcamp</h4>
                </a>
              </div> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a3433682787_2.jpg"
                alt=""
              />
              <h6 className="album-title">Eye of God – 11/13/2023</h6>
            </Col>
            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a3079473660_2.jpg"
                alt=""
              />
              <h6 className="album-title">DIRTEATER 2 – 7/30/2021</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a3002864667_2.jpg"
                alt=""
              />
              <h6 className="album-title">GENISIS – 5/1/2020</h6>
            </Col>
            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a2317917187_2.jpg"
                alt=""
              />
              <h6 className="album-title">GRIEF – 12/20/2019</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <img
                id="art"
                src="https://f4.bcbits.com/img/a3684599165_2.jpg"
                alt=""
              />
              <h6 className="album-title">NEBULA – 11/29/2019</h6>
            </Col>

            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a1824821676_2.jpg"
                alt=""
              />
              <h6 className="album-title">ETERNAL – 10/20/2019</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a2729017100_2.jpg"
                alt=""
              />
              <h6 className="album-title">BIRTH – 1/1/2019</h6>
            </Col>

            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a1492645822_2.jpg"
                alt=""
              />
              <h6 className="album-title">
                TOGETHER WE ARE ONE (A LIVE RECORDING) KALTRUNNER + JOEL HENLINE
                – 12/21/2018
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                id="art"
                src="	https://f4.bcbits.com/img/a1232231586_2.jpg"
                alt=""
              />
              <h6 className="album-title">TRANSMISSION X – 11/23/2018</h6>
            </Col>

            <Col>
              <img
                id="art"
                src="	https://f4.bcbits.com/img/a0616623960_2.jpg"
                alt=""
              />
              <h6 className="album-title">DIRTEATER – 10/5/2018</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a2344627094_2.jpg"
                alt=""
              />
              <h6 className="album-title">TRANSMISSION B – 6/30/2018</h6>
            </Col>
            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a0681219287_2.jpg"
                alt=""
              />
              <h6 className="album-title">TRANSMISSION A – 6/29/2018</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                id="art"
                src="	https://f4.bcbits.com/img/a2085017960_2.jpg"
                alt=""
              />
              <h6 className="album-title">WHEN WE WERE HUMANS – 11/18/2017</h6>
            </Col>
            <Col>
              <img
                id="art"
                src="https://f4.bcbits.com/img/a3573004288_2.jpg"
                alt=""
              />
              <h6 className="album-title">SEASONS – 9/1/2017</h6>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AlbumArt;
