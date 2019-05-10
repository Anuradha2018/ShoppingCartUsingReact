import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };
  //LIFECYCLE HOOK: this constructor is called only once when an instance of the class is created.
  constructor() {
    super();
    console.log("App-constructor");
    // we can have the state set directly, for example: this.state = this.state.something.
    // we should not use setState() because this method can only be called when a component is called and placed in the DOM
    // this.state = this.props.something will not work unless we dont pass 'props'as a parameter in the constructor also in the base class.
  }
  componentDidMount() {
    // ajax call
    // call the setState with new data
    console.log("App mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    console.log("handle Increment", counters);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            // now these are the property of the prop object
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
