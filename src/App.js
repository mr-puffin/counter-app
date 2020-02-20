import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  //constructor(props) {
  //  super(props);
  // initialize the properties of this class here.
  //}

  componentDidMount() {
    // place for Ajax calls to get data from the server
    // then setState with the new data
  }

  handleDelete = counter => {
    let counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    let counters = this.state.counters.map(c => {
      if (c.id === counter.id) {
        c.value++;
      }
      return c;
    });
    this.setState({ counters });
  };

  handleDecrement = counter => {
    let counters = this.state.counters.map(c => {
      if (c.id === counter.id) {
        c.value--;
      }
      return c;
    });
    this.setState(counters);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
