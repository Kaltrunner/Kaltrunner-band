import AnimatedCursor from "react-animated-cursor";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./assets/components/body/Body";
import AlbumArt from "./assets/components/albumart/AlbumArt";
import Footer from "./assets/components/footer/Footer";

function App() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={110}
        color="255, 255, 255"
        outerAlpha={.9}
        innerScale={0.5}
        outerScale={0.5}
        hasBlendMode={true}
        trailingSpeed={10}
        innerStyle={{
          mixBlendMode: "difference",
        }}
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
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
