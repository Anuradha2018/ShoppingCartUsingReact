import React from "react";
// stateless functional component
// instead of using a component we can use a function to do it.

const Navbar = ({ totalCounters }) => {
  console.log("Navbar Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Shopping Cart{" "}
        <span className="badge badge-pill badge-seconday">
          Item Count: {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
