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
      value: 0,
      data: [
        { name: "05/06", uv: 12, index: 13, amt: 31 },
        { name: "06/06", uv: 15, index: 16, amt: 12 },
        { name: "07/06", uv: 17, index: 11, amt: 12 },
        { name: "08/06", uv: 22, index: 21, amt: 14 },
        { name: "09/06", uv: 26, index: 19, amt: 19 }
      ]
    };
  }

  componentDidMount() {
    setInterval(() => {
      const value = Math.random() * 100;
      this.setState({
        value
      });
    }, 1000);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
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
              dataKey="index"
              stroke="#8884d8"
              label={<CustomizedChartLabel />}
            />
          </LineChart>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default MildewChart;
