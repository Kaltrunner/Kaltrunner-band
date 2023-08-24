import AnimatedCursor from "react-animated-cursor";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/body/Body";
import AlbumArt from "./components/albumart/AlbumArt";
import { ScrollToTop } from "react-router-scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={125}
        color="255, 255, 255"
        outerAlpha={0.9}
        innerScale={0.5}
        outerScale={0.5}
        hasBlendMode={true}
        trailingSpeed={20}
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
      </Routes>
    </>
  );
}

export default App;
