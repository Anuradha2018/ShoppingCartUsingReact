import React from "react";
// stateless functional component
// instead of using a component we can use a function to do it.

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Shopping Cart
        <span className="badge badge-pill badge-seconday">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
