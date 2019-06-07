import React from "react";
import { Fetch } from "../services/Fetch";
import GaugeWrapper from "./GaugeWrapper";

const getHexColor = value => {
  if (value < 13) {
    return "#00a191";
  }
  if (value < 37) {
    return "#77be47";
  }
  return "#b42400";
};

export class TemperatureSensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      const value = Math.random() * 100;
      this.setState({
        value: this.fetchTemperature()
      });
    }, 3000);
  }

  fetchTemperature() {
    Fetch.redirect("/data/temperature")
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.status !== 403) {
          this.setState({
            value: data
          });
        }
      });
  }

  render() {
    const { value } = this.state;
    const colorHex = `${getHexColor(value)}`;
    return (
      <GaugeWrapper
        value={value}
        width={200}
        height={160}
        header="TEMPERATURE"
        color={colorHex}
        min={0}
        max={49}
      />
    );
  }
}

export default TemperatureSensor;
