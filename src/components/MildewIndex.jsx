import React from "react";
import SensorWrapper from "./SensorWrapper";
import { Fetch } from "../services/Fetch";

class MildewIndex extends React.Component {
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
        value: this.fetchMildewData()
      });
    }, 3000);
  }

  fetchMildewData() {
    Fetch.redirect("/api/mildew")
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
        className="mildew"
        header="MILDEW INDEX"
        // startAngle={0}
        // endAngle={180}
        value={value}
        height={350}
        valueFontSize="72px"
      />
    );
  }
}

export default MildewIndex;
