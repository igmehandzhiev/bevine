import React from "react";
import { Temperature } from "react-environment-chart";
import { Card, CardContent, CardHeader } from "semantic-ui-react";
import { Fetch } from "../services/Fetch";
import Number from "./Number";

export class TemperatureSensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      const value = Math.random() * 100;
      this.setState({
        value: this.fetchTemperature()
      });
    }, 1000);
  }

  fetchTemperature() {
    Fetch.redirect("/api/temperature")
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
    const { value } = this.state;
    return (
      <Card>
        <Card.Content>
          <Card.Header content="Temperature" />
          <Card.Meta>
            <Number value={value} />%
          </Card.Meta>
          <Temperature height={250} tips={[" ", " ", " ", " "]} value={value} />
        </Card.Content>
      </Card>
    );
  }
}

export default TemperatureSensor;
