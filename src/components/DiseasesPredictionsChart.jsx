import React from "react";
import ReactApexChart from "react-apexcharts";

export class DiseasesPredictionsChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
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
          categories: [
            "20.06.2019",
            "21.06.2019",
            "22.06.2019",
            "23.06.2019",
            "24.06.2019"
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
      },
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

  render() {
    const { value } = this.state;

    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="400"
          width="700"
        />
      </div>
    );
  }
}

export default DiseasesPredictionsChart;
