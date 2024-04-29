import AnimatedCursor from "react-animated-cursor";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/body/Body";
import AlbumArt from "./components/albumart/AlbumArt";
import Videos from "./components/videos/Videos";
import { ScrollToTop } from "react-router-scroll-to-top";

function App() {
  const vidRef = useRef();

  const setPlaybockRate = () => {
    vidRef.current.playbackRate = 0.2;
  };

  return (
    <>
      <video
        ref={vidRef}
        id="bg-vid"
        autoPlay
        loop
        muted
        onCanPlay={setPlaybockRate}
      >
        <source
          src="https://i.makeagif.com/media/6-02-2015/nvgyvP.mp4"
          type="video/mp4"
        />
        Your browswer does not support HTML5 video.
      </video>
      <ScrollToTop />
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={125}
        color="255, 255, 255"
        outerAlpha={0.9}
        innerScale={0.5}
        outerScale={0}
        hasBlendMode={true}
        trailingSpeed={14}
        filter={true}
        outerStyle={{
          mixBlendMode: "difference",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'input[type=""]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/AlbumArt" element={<AlbumArt />} />
        <Route path="/Videos" element={<Videos />} />
      </Routes>
    </>
  );
}

export default App;
