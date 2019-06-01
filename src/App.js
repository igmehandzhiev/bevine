import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import logo from "./resources/logo_black.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReactSpeedometer
          maxValue={500}
          value={333}
          startColor="green"
          endColor="red"
          maxSegmentLabels={5}
          segments={1000}
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />
      </header>
    </div>
  );
}

export default App;
