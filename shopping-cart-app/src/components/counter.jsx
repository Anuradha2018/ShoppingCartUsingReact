import React, { Component } from "react";
class Counter extends Component {
  // using componentDidUpdate lifecycle hook

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call and get te new data from the srver.
    }
  }
  //below state property is initiated only once when
  // the instrance of the counter component is created
  // when we click the reset button the local state of the counter component  is not updated
  // so we should remove the local state in the counter component and have the single source of truth
  /*state = {
    value: this.props.counter.value
  };*/

  /*constructor() {
    super();
    // this here gives reference to the counter object.
    // console.log("çonstructor", this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/
  // arrow function dont rebind the this key word, it inherits

  /*handleIncrement = () => {
    // this gives error because we dont have access to the state property
    // console.log("íncrement clicked", this.state.count);
    // if 'this'is called as a part of method in an object, 'this' returns reference to that object
    //if this is a part of a standalone function, it refers to window object
    // if strict mode is enabled, this is undefined
    // console.log("increment clicked", this);
    // below method is telling react that this state is going to change, react will schedule a call to the render method, this is an asynchronous call.
    // console.log(product);
    // this.setState({ value: this.state.value + 1 });

  };*/
  componentWillUnmount() {
    console.log("Component Unmount"); // works when we want to clean up, for example in this project, while deleting the items, we can see this being executed
  }
  render() {
    // 'Props' are plain javascript objects that includes all the attributes that we set in the counters component
    // below in line 31, value and selected will be the property of the prop object
    //key will not be part of that because key are used to uniquely identify elements
    // console.log("props", this.props);
    console.log("Counter Rendered");
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //Object destructuring
    // Old: return this.state.count === 0 ? "Zero" : this.state.count;
    //New: after destructuring
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
