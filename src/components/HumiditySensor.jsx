import React from "react";
import { Fetch } from "../services/Fetch";
import GaugeWrapper from "./GaugeWrapper";

const getHexColor = value => {
  if (value < 49) {
    return "#77be47";
  }
  if (value < 69) {
    return "#beba11";
  }
  return "#b42400";
};

export class HumiditySensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      const value = Math.random() * 100;
      this.fetchHumidity();
    }, 3000);
  }

  fetchHumidity() {
    Fetch.redirect("/data/humidity")
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
        header="HUMIDITY"
        color={colorHex}
        min={0}
        max={100}
        valueFormatter={v => `${v}%`}
      />
    );
  }
}

export default HumiditySensor;
