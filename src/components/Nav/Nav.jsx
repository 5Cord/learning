import React from "react";
import cl from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={cl.nav}>
      <div className={`${cl.ietem} ${cl.active}`}>
        <a>Profile</a>
      </div>
      <div className={cl.item}>
        <a>Message</a>
      </div>
      <div className={cl.item}>
        <a>Music</a>
      </div>
    </nav>
  );
};

export default Nav;
