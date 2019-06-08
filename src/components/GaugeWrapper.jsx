import React from "react";
import { Card } from "semantic-ui-react";
import Gauge from "react-svg-gauge";

class GaugeWrapper extends React.PureComponent {
  render() {
    const {
      header = "DATA",
      height = 160,
      width = 200,
      value = 0,
      className,
      color = "green",
      min = 0,
      max = 100,
      valueFormatter
    } = this.props;
    return (
      <Card raised fluid className={className}>
        <Card.Content textAlign="center">
          <Card.Header>{header}</Card.Header>
        </Card.Content>
        <Card.Content fluid textAlign="center">
          <Gauge
            value={value}
            width={width}
            height={height}
            label=""
            color={color}
            min={min}
            max={max}
            valueFormatter={valueFormatter}
            valueLabelStyle={{ fontSize: "24px" }}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default GaugeWrapper;
