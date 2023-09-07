import "./body.css";
import { useRef, useEffect, useState } from "react";
import Marquee from "../marquee/Marquee";
import Header from "../header/Header";
import About from "../about/About";
import Footer from "../footer/Footer";
import { Waveform } from "@uiball/loaders";

function Body() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("Site-song.mp3");
    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  function togglePlayback() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
      <div className="main-body-div">
        <Marquee />
        <Header />
        <div className="overlay"></div>
        <div className="body-text-div">
          <h1 className="header-text">KALTRUNNER</h1>
          <button className="play-button" onClick={togglePlayback}>
            <h6 className="header-text-h6">
              {isPlaying ? (
                <div className="stop-div">
                  <div class="waveform">
                    <div>(</div>
                    <div class="waveform__bar"></div>
                    <div class="waveform__bar"></div>
                    <div class="waveform__bar"></div>
                    <div class="waveform__bar"></div>
                  </div>
                  <span className="header-text-h6">STOP)</span>
                </div>
              ) : (
                "(– PLAY)"
              )}
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
