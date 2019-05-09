import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };
  /*constructor() {
    super();
    // this here gives reference to the counter object.
    // console.log("çonstructor", this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/
  // arrow function dont rebind the this key word, it rebinds

  handleIncrement = () => {
    // this gives error because we dont have access to the state property
    // console.log("íncrement clicked", this.state.count);
    // if 'this'is called as a part of method in an object, 'this' returns reference to that object
    //if this is a part of a standalone function, it refers to window object
    // if strict mode is enabled, this is undefined
    // console.log("increment clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
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
