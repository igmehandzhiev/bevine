import React from "react";
import { Fetch } from "../services/Fetch";
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
import CustomizedChartLabel from "./CustomizedChartLabel";

export class MildewChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { "Date": "17.06.2019", "Black root index": 40.0, "Mildew index": 84.15},
        { "Date": "18.06.2019", "Black root index": 0.1, "Mildew index": 79.15},
        { "Date": "19.06.2019", "Black root index": 5, "Mildew index": 80.4},
        { "Date": "20.06.2019", "Black root index": 13, "Mildew index": 83.25},
        { "Date": "21.06.2019", "Black root index": 24, "Mildew index": 79.75}
      ]
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchDiseasesPredictions();
    }, 3000);
  }

  fetchDiseasesPredictions() {
    Fetch.redirect("/data/diseasesPredictions")
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
          <LineChart width={550} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" height={50} />
            <YAxis
              label={{
                value: "Diseases predictions",
                angle: -90,
                position: "insideLeft",
                textAnchor: "middle"
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="natural"
              dataKey="Black root index"
              stroke="#653887"
              label={<CustomizedChartLabel middleValue={33} />}
            />
            <Line
              type="natural"
              dataKey="Mildew index"
              stroke="#134857"
              label={<CustomizedChartLabel />}
            />
          </LineChart>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default MildewChart;
