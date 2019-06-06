import React from "react";
import { Humidity } from "react-environment-chart";
import { Fetch } from "../services/Fetch";
import Number from "./Number";
import SensorWrapper from "./SensorWrapper";

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
      this.setState({
        value: this.fetchHumidity()
      });
    }, 3000);
  }

  fetchHumidity() {
    Fetch.redirect("/api/humidity")
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
        header="HUMIDITY"
        // startAngle={-180}
        // endAngle={0}
        value={value}
      />
    );
  }
}

export default HumiditySensor;
