import { Suspense } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          outerAlpha={1}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
