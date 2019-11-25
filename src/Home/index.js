import React, { Component } from "react";
import "./index.less";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <video id="video" autoplay></video>
        <canvas id="canvas_vedio"></canvas>
      </div>
    );
  }
}

export default Home;
