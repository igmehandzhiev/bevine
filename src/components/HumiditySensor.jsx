import React from "react";
import { Humidity } from "react-environment-chart";
import { Fetch } from "../services/Fetch";
import Number from "./Number";

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
    }, 1000);
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
      <div>
        <Number value={value} />
        <Humidity height={150} value={value} />
      </div>
    );
  }
}

export default HumiditySensor;
