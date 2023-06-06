import "./body.css";
import React, { useRef, useEffect } from 'react';

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
        <div className="overlay" ></div>
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
    </>
  );
}

export default Body;
