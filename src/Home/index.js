import React, { Component } from "react";
import { getVideoStream } from "./utils.js";
import "./index.css";

class Home extends Component {
  componentDidMount() {
    getVideoStream();
  }
  render() {
    return (
      <div className="home">
        <select id="video-select"></select>
        <video id="video" autoPlay></video>
        <canvas id="canvas-video"></canvas>
      </div>
    );
  }
}

export default Home;
