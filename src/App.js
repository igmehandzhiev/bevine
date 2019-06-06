import React from "react";
import {
  Container,
  Image,
  Grid,
  Divider,
  Menu,
  Card,
  Accordion,
  Icon
} from "semantic-ui-react";
import logo from "./graphics/logo_white.png";
import "./css/App.css";
import { MildewChart } from "./components/MildewChart";
import { HumiditySensor } from "./components/HumiditySensor";
import { TemperatureSensor } from "./components/TemperatureSensor";
import { MoistureSensor } from "./components/MoistureSensor";
import MildewIndex from "./components/MildewIndex";

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
        <Menu.Header className="logo-nav-bar">
          <Image src={logo} className="App-logo" alt="logo" />
        </Menu.Header>
        <Menu.Item className="logo-nav-bar" fitted="horizontally">
          {/* TODO: Make that centered and remove right border */}
          <h1 id="vision">We make vines talk</h1>
        </Menu.Item>
      </Menu>
      <Grid>
        <Grid container id="sensors-grid" textAlign="center" centered>
          <Grid.Row columns={3}>
            <Grid.Column>
              <HumiditySensor />
            </Grid.Column>
            <Grid.Column>
              <TemperatureSensor />
            </Grid.Column>
            <Grid.Column>
              <MoistureSensor />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <MildewIndex />
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <MildewChart/>
          </Grid.Row>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
