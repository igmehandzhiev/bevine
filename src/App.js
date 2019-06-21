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
import { HumiditySensor } from "./components/HumiditySensor";
import { TemperatureSensor } from "./components/TemperatureSensor";
import { MoistureSensor } from "./components/MoistureSensor";
import MildewIndex from "./components/MildewIndex";
import BlackRootIndex from "./components/BlackRootIndex";
import DiseasesPredictionsChart from "./components/DiseasesPredictionsChart";

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
          <Grid.Row columns={2}>
            <Grid.Column>
              <MildewIndex />
            </Grid.Column>
            <Grid.Column>
              <BlackRootIndex />
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <DiseasesPredictionsChart/>
          </Grid.Row>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
