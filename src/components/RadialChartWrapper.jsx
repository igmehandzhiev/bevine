import React from "react";
import { Card } from "semantic-ui-react";
import RadialChart from "./RadialChart";

class RadialChartWrapper extends React.PureComponent {
  render() {
    const {
      header,
      endAngle,
      height,
      startAngle,
      value,
      valueFontSize,
      className
    } = this.props;
    return (
      <Card raised fluid className={className}>
        <Card.Content>
          <Card.Header>{header}</Card.Header>
        </Card.Content>
        <Card.Content fluid>
          <RadialChart
            startAngle={startAngle}
            endAngle={endAngle}
            height={height}
            value={value}
            valueFontSize={valueFontSize}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default RadialChartWrapper;
