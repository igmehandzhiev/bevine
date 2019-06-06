import React from "react";
import { Card } from "semantic-ui-react";
import { Fetch } from "../services/Fetch";
import Number from "./Number";
import SensorWrapper from "./SensorWrapper";

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
    Fetch.redirect("/api/temperature")
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
    return (
      <SensorWrapper
        header="TEMPERATURE"
        // startAngle={-90}
        // endAngle={90}
        value={value}
      />
    );
  }
}

export default TemperatureSensor;
