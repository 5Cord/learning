import React from "react";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.header}>
      <img
        className={cl.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/b/be/Chigai_kuginuki.png"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;
