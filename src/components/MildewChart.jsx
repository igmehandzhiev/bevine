import React, { PureComponent } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Fetch } from "../services/Fetch";

class CustomizedLabel extends PureComponent {
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
        fill={CustomizedLabel.fillColor(value)}
        fontSize={13}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  }
}

export class MildewChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      data: [
        { name: "05/06", uv: 12, pv: 13, amt: 31 },
        { name: "06/06", uv: 15, pv: 16, amt: 12 },
        { name: "07/06", uv: 17, pv: 11, amt: 12 },
        { name: "08/06", uv: 22, pv: 21, amt: 14 },
        { name: "09/06", uv: 26, pv: 19, amt: 19 }
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

  fetchMildewData() {
    Fetch.redirect("/api/mildew/")
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
    const { data } = this.state;
    return (
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="natural"
          dataKey="pv"
          stroke="#8884d8"
          label={<CustomizedLabel />}
        />
      </LineChart>
    );
  }
}

export default MildewChart;
