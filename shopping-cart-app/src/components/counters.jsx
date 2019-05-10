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
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Title #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
