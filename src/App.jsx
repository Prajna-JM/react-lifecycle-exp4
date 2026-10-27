
import React, { Component } from "react";

class City extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Mysuru"
    };

    console.log("Constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount called");

    this.timer1 = setTimeout(() => {
      this.setState({ city: "Bangalore" });

      this.timer2 = setTimeout(() => {
        this.setState({ city: "Mysuru" });
      }, 2000);

    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    return prevState.city;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called");
    console.log("Previous city:", snapshot);
    console.log("Current city:", this.state.city);
  }

  componentWillUnmount() {
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
    console.log("Component unmounted");
  }

  render() {
    console.log("render called");

    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>React Class Component Lifecycle</h1>
        <h2>City Name: {this.state.city}</h2>
      </div>
    );
  }
}

export default City;
