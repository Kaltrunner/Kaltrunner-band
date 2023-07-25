import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "./loadingScreen.css";

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`loading-body-div ${isVisible ? "" : "loading-text-hidden"}`}
    >
      <CountUp end={100} duration={3} className="loading-text"></CountUp>
      <h1 className="loading-text">%</h1>
    </div>
  );
}

export default LoadingScreen;
