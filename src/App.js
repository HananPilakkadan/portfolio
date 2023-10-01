import { Suspense } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
