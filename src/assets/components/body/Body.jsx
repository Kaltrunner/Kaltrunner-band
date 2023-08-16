import "./body.css";
import React, { useRef, useEffect } from "react";
import Header from "../header/Header";
import About from "../about/About";
import Footer from "../footer/Footer";
import { ScrollToTop } from "react-router-scroll-to-top";

function Body() {
  const vidRef = useRef(null);

  function play() {
    new Audio("Site-song.mp3").play();
  }

  // useEffect(() => {
  //   if (vidRef.current) {
  //     vidRef.current.playbackRate = 0.25;
  //   }
  // }, []);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.playbackRate = 0.25;
      vidRef.current.play(); // Start playing the video when the component mounts
    }

    return () => {
      if (vidRef.current) {
        vidRef.current.pause(); // Pause the video when the component unmounts
      }
    };
  }, []);

  return (
    <>
      <ScrollToTop />
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
          <h1 className="header-text">KALTRUNNER</h1>
          <button className="play-button" onClick={play}>
            <h6 className="header-text-h6">(↗ PLAY)</h6>
          </button>
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
