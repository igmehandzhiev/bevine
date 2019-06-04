import React from "react";

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  render() {
    const { value } = this.state;
    return <div id="number">{value}</div>;
  }
}

export default Number;
