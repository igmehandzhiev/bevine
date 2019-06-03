import React from "react";
import { Humidity } from "react-environment-chart";
import { Fetch } from "../services/Fetch";

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
                value
            });
        }, 1000);
    }

    fetchHumidity() {
        Fetch.redirect("/api/temperature/")
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
        return <Humidity height={150} value={value} />;
    }
}

export default TemperatureSensor;
