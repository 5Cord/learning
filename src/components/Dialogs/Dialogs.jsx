import React from "react";
import cl from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={cl.dialog + " " + cl.active}>
      <NavLink to={props.id}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={cl.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsItems}>
        <DialogItem name="Artem" id="1" />
        <DialogItem name="Valeriya" id="2" />
        <DialogItem name="Vyachaslav" id="3" />
        <DialogItem name="Sergey" id="4" />
      </div>
      <div className={cl.messages}>
        <Message message="Привет" />
        <Message message="Здорова брат" />
        <Message message="Как поживаешь?" />
        <Message message="Всё потихоньку, скучаю" />
      </div>
    </div>
  );
};

export default Dialogs;
