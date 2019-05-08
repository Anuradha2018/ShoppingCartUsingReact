import React, { Component } from "react";
class Counter extends Component {

  //state includes any data that the component needs
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    //Object destructuring
    // Old: return this.state.count === 0 ? "Zero" : this.state.count;
    //New: after destructuring
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

}

export default Counter;
