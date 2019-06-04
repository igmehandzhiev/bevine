import React from "react";
import { Tvoc } from "react-environment-chart";
import { Fetch } from "../services/Fetch";

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
    }, 1000);
  }

  fetchMoisture() {
    Fetch.redirect("/api/moisture/")
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
    return <Tvoc height={250} value={value} />;
  }
}

export default MoistureSensor;
