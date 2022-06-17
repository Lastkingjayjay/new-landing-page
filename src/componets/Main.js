import React from "react";
import vid1 from "../assets/videoBg.mp4";
import "../App.css";

const Main = () => {
  return (
    <div className="main">
      <video src={vid1} autoPlay loop muted/>
    </div>
  );
};

export default Main;
