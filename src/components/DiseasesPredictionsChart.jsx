import React from "react";
import ReactApexChart from "react-apexcharts";
import { Fetch } from "../services/Fetch";

const THREE_HOURS = 108000;
const chartOptions = {
  chart: {
    id: "mychart",
    shadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 1
    },
    toolbar: {
      show: false
    }
  },
  colors: ["#77B6EA", "#545454"],
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: "smooth"
  },
  title: {
    text: "Diseases predictions",
    style: {
      fontSize: "26px"
    },
    align: "left"
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  markers: {
    size: 6
  },
  xaxis: {
    // Awful, but working as we want (:
    categories: [
      `${new Date().getDate()}.${new Date().getMonth() +
        1}.${new Date().getFullYear()}`,
      `${new Date().getDate() + 1}.${new Date().getMonth() +
        1}.${new Date().getFullYear()}`,
      `${new Date().getDate() + 2}.${new Date().getMonth() +
        1}.${new Date().getFullYear()}`,
      `${new Date().getDate() + 3}.${new Date().getMonth() +
        1}.${new Date().getFullYear()}`,
      `${new Date().getDate() + 4}.${new Date().getMonth() +
        1}.${new Date().getFullYear()}`
    ],
    title: {
      text: "Date"
    }
  },
  yaxis: {
    min: 0,
    max: 100
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
};

export class DiseasesPredictionsChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Mildew Index",
          data: [54, 89, 33, 76, 62]
        },
        {
          name: "Black Rot Index",
          data: [12, 21, 44, 58, 87]
        }
      ]
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchIndexes();
    }, THREE_HOURS);
  }

  fetchIndexes() {
    Fetch.redirect("/data/diseasesPredictions")
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.status !== 403) {
          this.setState({
            series: data
          });
        }
      });
  }

  render() {
    const { series } = this.state;

    return (
      <div id="chart">
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="line"
          height="400"
          width="700"
        />
      </div>
    );
  }
}

export default DiseasesPredictionsChart;
