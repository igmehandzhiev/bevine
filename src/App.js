import React from "react";
import { Container, Image, Header, Grid, Card } from "semantic-ui-react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import logo from "./resources/logo_black.png";
import "./App.css";
import { HumiditySensor } from "./components/HumiditySensor";
import { TemperatureSensor } from "./components/TemperatureSensor";
import { MoistureSensor } from "./components/MoistureSensor";
import { MildewChart } from "./components/MildewChart";

function App() {
  return (
    <Container>
      <Header as="h1" textAlign="center">
        <Image fluid src={logo} className="App-logo" alt="logo" />
      </Header>
      <Grid textAlign="center" verticalAlign="top">
        <Grid.Row>
          <Grid.Column width={5}>
            <HumiditySensor />
          </Grid.Column>
          <Grid.Column width={5}>
            <Card className="non-bordered">
              <TemperatureSensor />
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card className="non-bordered">
              <MoistureSensor />
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <MildewChart />
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
