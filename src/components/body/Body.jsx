import "./body.css";
import React, { useRef, useEffect, useState } from "react";
import Marquee from "../marquee/Marquee";
import Header from "../header/Header";
import About from "../about/About";
import Footer from "../footer/Footer";

function Body() {
  const vidRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlayback() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.playbackRate = 0.25;
      // vidRef.current.play();
    }

    audioRef.current = new Audio("Site-song.mp3");
    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      // if (vidRef.current) {
      //   vidRef.current.pause();
      // }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <>
      <div className="main-body-div">
        <Marquee />
        <Header />

        <div className="overlay"></div>

        <video ref={vidRef} id="bg-vid" autoPlay loop muted>
          <source src="Untitled.mp4" type="video/mp4" />
        </video>
        <div className="body-text-div">
          <h1 className="header-text">KALTRUNNER</h1>
          <button className="play-button" onClick={togglePlayback}>
            <h6 className="header-text-h6">
              {isPlaying ? "(– STOP)" : "(↗ PLAY)"}
            </h6>
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
