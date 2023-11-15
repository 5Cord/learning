import React from "react";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.header}>
      <img
        src="https://i.pinimg.com/originals/34/4d/b3/344db311e0f07ec18a0ed7b91cf80a7c.png"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;
