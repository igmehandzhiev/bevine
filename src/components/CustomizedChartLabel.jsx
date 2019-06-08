import React, { PureComponent } from "react";

class CustomizedChartLabel extends PureComponent {
  static fillColor(value, middleValue = 55) {
    if (value < 13) {
      return "blue";
    }
    if (value < middleValue) {
      return "green";
    }
    return "red";
  }

  render() {
    const { x, y, value, middleValue } = this.props;

    return (
      <text
        x={x}
        y={y}
        dy={-9}
        dx={-5}
        fill={CustomizedChartLabel.fillColor(value, middleValue)}
        fontSize={13}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  }
}

export default CustomizedChartLabel;
