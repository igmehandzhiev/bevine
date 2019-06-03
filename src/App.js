import React from "react";
import {
  Container,
  Image,
  Grid,
  Card,
  Divider,
  Menu,
  Segment
} from "semantic-ui-react";
import logo from "./graphics/logo_white.png";
import "./css/App.css";
import { HumiditySensor } from "./components/HumiditySensor";
import { TemperatureSensor } from "./components/TemperatureSensor";
import { MoistureSensor } from "./components/MoistureSensor";
import { MildewChart } from "./components/MildewChart";
import Label from "semantic-ui-react/dist/commonjs/elements/Label";

function App() {
  return (
    <Container>
      <Menu
        className="nav-bar"
        fixed="top"
        size="small"
        inverted
        color="b92c2c"
      >
        <Menu.Header className="logo-nav-bar" fitted>
          <Image src={logo} className="App-logo" alt="logo" />
        </Menu.Header>
        <Menu.Item className="logo-nav-bar" position="center" fitted>
          {/*TODO: Make that centered and remove right border*/}
          <h1 id="vision">We make vines talk</h1>
        </Menu.Item>
      </Menu>
      <Grid container id="sensors-grid" textAlign="center" centered>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Label circular content="Humidity" />
            <HumiditySensor />
          </Grid.Column>
          <Grid.Column>
            <Label circular content="Temperature" />
            <TemperatureSensor className="vertical-sensor" />
          </Grid.Column>
          <Grid.Column>
            <Label circular content="Moisture" />
            <MoistureSensor />
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <MildewChart />
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
