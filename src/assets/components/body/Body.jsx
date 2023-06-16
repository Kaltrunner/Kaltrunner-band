import "./body.css";
import React, { useRef, useEffect } from "react";
import Header from "../header/Header";
import About from "../about/About";
import Footer from "../footer/Footer";

function Body() {
  const vidRef = useRef(null);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.playbackRate = 0.1;
    }
  }, []);

  return (
    <>
      <div className="main-body-div">
        <Header />

        <div className="overlay"></div>

        <video
          ref={vidRef}
          id="bg-vid"
          src="Untitled.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
        />
        <div className="body-text-div">
          <h1 className="header-text">Kaltrunner</h1>
        </div>
      </div>
      <section id="section-about">
        <About />
      </section>

      <Footer />
    </>
  );
}

export default Body;
