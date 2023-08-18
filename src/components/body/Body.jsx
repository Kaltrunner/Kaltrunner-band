import "./body.css";
import React, { useRef, useEffect, useState } from "react";
import Marquee from "../marquee/Marquee";
import Header from "../header/Header";
import About from "../about/About";
import Footer from "../footer/Footer";
import { ScrollToTop } from "react-router-scroll-to-top";

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
      vidRef.current.play();
    }

    audioRef.current = new Audio("Site-song.mp3");
    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    // Check if the music should be playing based on local storage
    // const storedIsPlaying = localStorage.getItem("isMusicPlaying");
    // if (storedIsPlaying === "true") {
    //   audioRef.current.play();
    //   setIsPlaying(true);
    // }

    return () => {
      if (vidRef.current) {
        vidRef.current.pause();
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("isMusicPlaying", isPlaying.toString());
  // }, [isPlaying]);

  return (
    <>
      <ScrollToTop />
      <div className="main-body-div">
        <Marquee />
        <Header />

        <div className="overlay"></div>

        <video
          ref={vidRef}
          id="bg-vid"
          src="Untitled.mp4"
          type="video/mp4"
          loop
          muted
        />
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
