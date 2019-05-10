import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  // below state is private to this component, invisible to other components.
  // sometimes a component may not have state, it gets it via props.
  //props are read only
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
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            // below are the props that does declaration of the counter object, instead of the properties the counter object can be passed as a prop.
            // value={counter.value}
            // id={counter.id}
            //object being passed
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
