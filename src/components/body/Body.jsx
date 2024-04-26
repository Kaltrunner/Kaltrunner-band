import "./body.css";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "../marquee/Marquee";
import Header from "../header/Header";
import About from "../about/About";
import Footer from "../footer/Footer";
import { Waveform } from "@uiball/loaders";
import videoFile from "/src/assets/KALTRUNNER-intuder-Clip.mp4";

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
      {/* <Waveform size={40} lineWeight={3.5} speed={1} color="black" /> */}
      <div className="main-body-div">
        <Marquee />
        <Header />
        <div className="overlay"></div>
        <div className="body-text-div">
          <h1 className="header-text">KALTRUNNER</h1>
          <button className="play-button" onClick={togglePlayback}>
            <h2 className="header-text-h6">
              {isPlaying ? (
                <div className="stop-div">
                  <div className="waveform">
                    <div>(</div>
                    <div className="waveform__bar"></div>
                    <div className="waveform__bar"></div>
                    <div className="waveform__bar"></div>
                    <div className="waveform__bar"></div>
                  </div>
                  <span className="header-text-h6">STOP)</span>
                </div>
              ) : (
                "(– PLAY)"
              )}
            </h2>
          </button>
        </div>
      </div>
      <div className="video-div">
        <video className="kaltVideo" autoPlay loop muted>
          <source
            src={videoFile}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p className="video-text">
          "Indruder" by: KALTRUNNER & Peter Russell • 2024 <br /> View in{" "}
          <Link id="video-link" className="video-under-line" to="/Videos">
            full <span>&#8599;</span>
          </Link>{" "}
        </p>
      </div>
      <section id="section-about">
        <About />
      </section>
      <Footer />
    </>
  );
}

export default Body;
