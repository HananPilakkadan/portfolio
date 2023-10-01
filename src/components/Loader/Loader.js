import React from "react";
import { HashLoader } from "react-spinners";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-contianer">
      <HashLoader color="#f36c4f" />
    </div>
  );
};

export default Loader;
