import React from "react";
import RadialChartWrapper from "./RadialChartWrapper";
import { Fetch } from "../services/Fetch";

class BlackRootIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchBlackRootData();
    }, 3000);
  }

  fetchBlackRootData() {
    Fetch.redirect("/data/blackRotIndex")
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
        className="blackRoot"
        header="BLACK ROOT RISK"
        // startAngle={0}
        // endAngle={180}
        value={value}
        height={350}
        valueFontSize="48px"
      />
    );
  }
}

export default BlackRootIndex;
