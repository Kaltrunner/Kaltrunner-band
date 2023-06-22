import React, { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const formattedTime = () => {
    let y = time.getFullYear();
    let month = months[time.getMonth()];
    let d = time.getDate();

    return month + " " + d + ", " + y;
  };

  return <div id="landing-txt">{formattedTime()}</div>;
}

export default Clock;