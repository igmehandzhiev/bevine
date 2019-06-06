import React from "react";
import { Fetch } from "../services/Fetch";
import SensorWrapper from "./SensorWrapper";

export class MoistureSensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      const value = Math.random();
      this.setState({
        value: this.fetchMoisture()
      });
    }, 3000);
  }

  fetchMoisture() {
    Fetch.redirect("/api/moisture")
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
        header="MOISTURE"
        // startAngle={0}
        // endAngle={180}
        value={value}
      />
    );
  }
}

export default MoistureSensor;
