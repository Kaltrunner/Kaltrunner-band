import {useState, useEffect} from "react";
import AnimatedCursor from "react-animated-cursor";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./assets/components/body/Body";
import AlbumArt from "./assets/components/albumart/AlbumArt";
import Footer from "./assets/components/footer/Footer";
import LoadingScreen from "./assets/components/loadingScreen/LoadingScreen";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    setTimeout(() => {
      setIsLoaded(true);
    }, 3700);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
    <div className={`app-content ${isLoaded ? "fade-in" : ""}`}>
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={125}
        color="255, 255, 255"
        outerAlpha={0.9}
        innerScale={0.5}
        outerScale={0.5}
        hasBlendMode={true}
        trailingSpeed={12}
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
        <Route path="/Footer" element={<Footer />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
