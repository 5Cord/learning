import React from "react";
import cl from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "activeLink" : "");

const Nav = () => {
  return (
    <nav className={cl.nav}>
      <div className={cl.item}>
        <NavLink to="/profile" className={setActive}>
          Профиль
        </NavLink>
      </div>

      <div className={cl.item}>
        <NavLink to="/statistica" className={setActive}>
          Статистика
        </NavLink>
      </div>

      <div className={cl.item}>
        <NavLink to="/portfolio" className={setActive}>
          Портфолио
        </NavLink>
      </div>

      <div className={cl.item}>
        <NavLink to="/dialogs" className={setActive}>
          Сообщения
        </NavLink>
      </div>

      <div className={cl.item}>
        <NavLink to="/friends" className={setActive}>
          Друзья
        </NavLink>
      </div>

      <div className={cl.item}>
        <NavLink to="/settings" className={setActive}>
          Настройки
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
