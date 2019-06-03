import React from "react";
import { Container, Image, Header, Grid, Card } from "semantic-ui-react";
import { Temperature, Tvoc } from "react-environment-chart";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import logo from "./resources/logo_black.png";
import "./App.css";
import { HumiditySensor } from "./components/HumiditySensor";
import TemperatureSensor from "./components/TemperatureSensor";

function App() {
  const data = [
    { name: "Page A", uv: 400, pv: 1400, amt: 1400 },
    { name: "Page A", uv: 300, pv: 2400, amt: 1500 },
    { name: "Page A", uv: 500, pv: 3400, amt: 1200 }
  ];
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
             <TemperatureSensor/>
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card className="non-bordered">
              <Tvoc height={250} value={23} />
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
