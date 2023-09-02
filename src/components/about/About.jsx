import "./about.css";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="body-about-section">
      <div className="container text-center">
        <div className="row">
          <div className="col- hidden" id="col-80">
            <h6 className="about-h6-text">WHO IS KALTRUNNER ?</h6>
            <br />
            KALTRUNNER, the artistic alias of noise producer Erik Russell, who
            is an experimental musician who delves into the realm of sonic
            exploration. Armed with an array of analog equipment such as drones,
            oscillators, effects pedals, and various other instruments,
            KALTRUNNER crafts compositions that traverse the boundaries of noise
            and ambient soundscapes. Through his unique approach, he constructs
            dense and immersive auditory experiences characterized by a
            juxtaposition of oppressive dissonance and ethereal weightlessness.
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm"></div>
          <div
            className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 hidden"
            id="col-40"
          >
            <br />
            <h6 className="about-h6-text">WHAT IS MY APPROACH ?</h6>
            <br />
            Breaking free from traditional structures. Through an array of
            analog instruments, he explores the primal essence of sound,
            crafting intricate audio tapestries. This innovative approach pushes
            boundaries and immerses listeners in an otherworldly realm, evoking
            the enigmatic melodies and ethereal atmospheres of outer space.
          </div>
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm"></div>
          <div
            className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 bottom hidden"
            id="col-40"
          >
            <br />
            <h6 className="about-h6-text">WHY THIS SOUND ?</h6>
            <br />
            The choice of this unique and experimental sound by KALTRUNNER
            arises from a deep passion for sound exploration. By wielding mostly
            analog equipment, KALTRUNNER fearlessly traverses the boundaries
            between noise and ambient sounds, crafting compositions that defy
            traditional musical structures. By embracing the raw power of sound
            itself, he creates intricate and multi-layered soundscapes that
            elicit profound emotional responses.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
