import React from "react";
import ReactApexChart from "react-apexcharts";

class RadialChart extends React.Component {
  constructor(props) {
    super(props);
    const {
      startAngle = 0,
      endAngle = 360,
      value = 33,
      height = 160,
      valueFontSize = "30px"
    } = this.props;
    this.state = {
      options: {
        plotOptions: {
          radialBar: {
            startAngle,
            endAngle,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
              shadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: 20,
                fontSize: valueFontSize
              }
            }
          }
        },
        fill: {
          colors: [
            data => {
              // eslint-disable-next-line no-shadow
              const { value } = data;
              if (value < 33) {
                return "#73d33d";
              }
              if (value < 77) {
                return "#b4c028";
              }
              return "#8a1d00";
            }
          ],
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.2,
            inverseColors: false,
            stops: [0, 33, 77]
          }
        }
      },
      series: [value],
      height
    };
  }

  componentWillReceiveProps = nextProps => {
    const { value } = nextProps;
    this.setState({
      series: [value === undefined ? 0 : value]
    });
  };

  render() {
    const { series, options, height } = this.state;
    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={height}
        />
      </div>
    );
  }
}

export default RadialChart;
