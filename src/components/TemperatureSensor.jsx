import React from "react";
import { Temperature } from "react-environment-chart";
import { Fetch } from "../services/Fetch";

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
    }, 1000);
  }

  fetchTemperature() {
    Fetch.redirect("/api/temperature/")
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
      <Temperature height={250} tips={[" ", " ", " ", " "]} value={value} />
    );
  }
}

export default TemperatureSensor;
