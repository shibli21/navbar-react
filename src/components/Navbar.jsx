import React from "react";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </div>
  );
};
