import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };
  /*constructor() {
    super();
    // this here gives reference to the counter object.
    // console.log("çonstructor", this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/
  // arrow function dont rebind the this key word, it rebinds

  handleIncrement = product => {
    // this gives error because we dont have access to the state property
    // console.log("íncrement clicked", this.state.count);
    // if 'this'is called as a part of method in an object, 'this' returns reference to that object
    //if this is a part of a standalone function, it refers to window object
    // if strict mode is enabled, this is undefined
    // console.log("increment clicked", this);
    // below method is telling react that this state is going to change, react will schedule a call to the render method, this is an asynchronous call.
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // 'Props' are plain javascript objects that includes all the attributes that we set in the counters component
    // below in line 31, value and selected will be the property of the prop object
    //key will not be part of that because key are used to uniquely identify elements
    // console.log("props", this.props);

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //Object destructuring
    // Old: return this.state.count === 0 ? "Zero" : this.state.count;
    //New: after destructuring
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
