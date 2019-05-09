import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };
  handleIncrement() {
    console.log("íncrement clicked");
  }

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
