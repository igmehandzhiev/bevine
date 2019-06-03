import React from "react";
import {
  Container,
  Image,
  Grid,
  Card,
  Divider,
  Menu} from "semantic-ui-react";
import logo from "./graphics/logo_white.png";
import "./css/App.css";
import { HumiditySensor } from "./components/HumiditySensor";
import { TemperatureSensor } from "./components/TemperatureSensor";
import { MoistureSensor } from "./components/MoistureSensor";
import { MildewChart } from "./components/MildewChart";

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
          <h1>We make vines talk</h1>
        </Menu.Item>
      </Menu>
      <Divider />
      <Container>
        <Grid className="sensors-grid" textAlign="center" verticalAlign="top">
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
    </Container>
  );
}

export default App;
