import React, { useState } from "react";

export const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};
