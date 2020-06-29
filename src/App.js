import React from "react";
import { Navbar } from "./components/Navbar";
import { NavItem } from "./components/NavItem";
import { ReactComponent as Arrow } from "./icoons/arrow.svg";
import { ReactComponent as Bell } from "./icoons/bell.svg";
import { ReactComponent as Bolt } from "./icoons/bolt.svg";
import { ReactComponent as Caret } from "./icoons/carent.svg";
import { ReactComponent as Chevron } from "./icoons/chevron.svg";
import { ReactComponent as Cog } from "./icoons/cog.svg";
import { ReactComponent as Messenger } from "./icoons/messenger.svg";
import { ReactComponent as Plus } from "./icoons/plus.svg";
import { DropdownMenu } from "./components/DropdownMenu";

function App() {
  return (
    <div>
      <Navbar>
        <NavItem icon={<Plus />} />
        <NavItem icon={<Bell />} />
        <NavItem icon={<Messenger />} />
        <NavItem icon={<Caret />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
