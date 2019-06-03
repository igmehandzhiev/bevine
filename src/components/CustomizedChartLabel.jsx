import React, { PureComponent } from "react";

class CustomizedChartLabel extends PureComponent {
  static fillColor(value) {
    if (value < 13) {
      return "green";
    }
    if (value < 25) {
      return "blue";
    }
    return "red";
  }

  render() {
    const { x, y, value } = this.props;

    return (
      <text
        x={x}
        y={y}
        dy={-9}
        dx={-5}
        fill={CustomizedChartLabel.fillColor(value)}
        fontSize={13}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  }
}

export default CustomizedChartLabel;
