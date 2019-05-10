import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  // below state is private to this component, invisible to other components.
  // sometimes a component may not have state, it gets it via props.
  //props are read only
  /* ------------LIFTING STATE UP, SO STATE AND FUNCTIONS SHIFTED TO ROOT COMPONENT TO MAKE IT AVAILABLE FOR ALL THE CLASSES---------
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
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    console.log("handle Increment", counters);
    // now we need to receive the index of the counter that we receive as the parameter
    const index = counters.indexOf(counter);
    // cloning the object that we receive
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
  };*/
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Clear
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            // below are the props that does declaration of the counter object, instead of the properties the counter object can be passed as a prop.
            // value={counter.value}
            // id={counter.id}
            //object being passed
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h4>Title #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
