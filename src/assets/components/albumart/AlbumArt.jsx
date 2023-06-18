import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AlbumNav from "../albumNav/AlbumNav";
import { ScrollToTop } from 'react-router-scroll-to-top';
import "./albumart.css";

function AlbumArt() {
  return (
    <div className="album-art-body-div">
      <ScrollToTop />
      <AlbumNav />
      <h1 className="album-art-header">Album art</h1>

      <Container>
        <Row>
          <Col md={3}>
            <img
              id="art"
              src="https://f4.bcbits.com/img/a3079473660_2.jpg"
              alt=""
            />
            <h6 className="album-title">DIRTEATER 2</h6>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <img
              id="art"
              src="https://f4.bcbits.com/img/a3002864667_2.jpg"
              alt=""
            />
            <h6 className="album-title">GENISIS</h6>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <img
              id="art"
              src="https://f4.bcbits.com/img/a2317917187_2.jpg"
              alt=""
            />
            <h6 className="album-title">GRIEF</h6>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <img
              id="art"
              src="https://f4.bcbits.com/img/a3684599165_2.jpg"
              alt=""
            />
            <h6 className="album-title">NEBULA</h6>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            {" "}
            <img
              id="art"
              src="https://f4.bcbits.com/img/a1824821676_2.jpg"
              alt=""
            />
            <h6 className="album-title">ETERNAL</h6>
          </Col>

          <Col md={{ span: 4, offset: 4 }}>
            <img
              id="art"
              src="https://f4.bcbits.com/img/a2729017100_2.jpg"
              alt=""
            />
            <h6 className="album-title">BIRTH</h6>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <img
              id="art"
              src="https://f4.bcbits.com/img/a1492645822_2.jpg"
              alt=""
            />
            <h6 className="album-title">
              TOGETHER WE ARE ONE (A LIVE RECORDING) KALTRUNNER + JOEL HENLINE
            </h6>
          </Col>

          <Col md={{ span: 4, offset: 4 }}>
            <img
              id="art"
              src="	https://f4.bcbits.com/img/a1232231586_2.jpg"
              alt=""
            />
            <h6 className="album-title">TRANSMISSION – X</h6>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <img
              id="art"
              src="	https://f4.bcbits.com/img/a0616623960_2.jpg"
              alt=""
            />
            <h6 className="album-title">DIRTEATER</h6>
          </Col>

          <Col md={{ span: 4, offset: 4 }}>
            <img
              id="art"
              src="https://f4.bcbits.com/img/a2344627094_2.jpg"
              alt=""
            />
            <h6 className="album-title">TRANSMISSION – B</h6>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <img
              id="art"
              src="https://f4.bcbits.com/img/a0681219287_2.jpg"
              alt=""
            />
            <h6 className="album-title">TRANSMISSION – A</h6>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <img
              id="art"
              src="	https://f4.bcbits.com/img/a2085017960_2.jpg"
              alt=""
            />
            <h6 className="album-title">WHEN WE WERE HUMANS</h6>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <img
              id="art"
              src="https://f4.bcbits.com/img/a3573004288_2.jpg"
              alt=""
            />
            <h6 className="album-title">SEASONS</h6>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <img id="art" src="" alt="" />
          </Col>
        </Row>
        {/* <Row>
        <Col md={{ span: 6, offset: 3 }}><img
              id="art"
              src=""
              alt=""
            /></Col>
      </Row> */}
      </Container>
      
    </div>
  );
}

export default AlbumArt;
