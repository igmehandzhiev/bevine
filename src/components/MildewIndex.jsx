import React from "react";
import RadialChartWrapper from "./RadialChartWrapper";
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
      this.fetchMildewData();
    }, 3000);
  }

  fetchMildewData() {
    Fetch.redirect("/data/downyMildewIndex")
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
      <RadialChartWrapper
        className="mildew"
        header="DOWNY MILDEW RISK"
        // startAngle={0}
        // endAngle={180}
        value={value}
        height={350}
        valueFontSize="48px"
      />
    );
  }
}

export default MildewIndex;
