import React from "react";
import { Fetch } from "../services/Fetch";
import GaugeWrapper from "./GaugeWrapper";

const getHexColor = value => {
  if (value < 0.7) {
    return "#77be47";
  }
  return "#e79419";
};

export class MoistureSensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchMoisture();
    }, 3000);
  }

  fetchMoisture() {
    Fetch.redirect("/data/moisture")
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
        header="MOISTURE"
        color={colorHex}
        min={0}
        max={1}
      />
    );
  }
}

export default MoistureSensor;
