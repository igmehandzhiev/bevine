import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Accordion, Icon } from "semantic-ui-react";
import { Fetch } from "../services/Fetch";
import CustomizedChartLabel from "./CustomizedChartLabel";

export class MildewChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "05/06", temperature: 12, humidity: 61, moisture: 70 },
        { name: "06/06", temperature: 15, humidity: 54, moisture: 65 },
        { name: "07/06", temperature: 17, humidity: 61, moisture: 53 },
        { name: "08/06", temperature: 22, humidity: 50, moisture: 41 },
        { name: "09/06", temperature: 26, humidity: 79, moisture: 63 }
      ]
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { data, activeIndex } = this.state;
    return (
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          History Data
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={60} />
            <YAxis
              label={{
                value: "Mildew Index",
                angle: -90,
                position: "insideLeft",
                textAnchor: "middle"
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="natural"
              dataKey="temperature"
              stroke="#653887"
              label={<CustomizedChartLabel />}
            />
            <Line
              type="natural"
              dataKey="humidity"
              stroke="#134857"
              label={<CustomizedChartLabel />}
            />
            <Line
              type="natural"
              dataKey="moisture"
              stroke="#1284d0"
              label={<CustomizedChartLabel />}
            />
          </LineChart>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default MildewChart;
