import React from "react";
import cl from "./Dialogs.module.css";
import { Link, NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/?" + props.id;
  return (
    <div className={cl.dialog + " " + cl.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={cl.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Artem" },
    { id: 2, name: "Valeriya" },
    { id: 3, name: "Vyachaslav" },
    { id: 4, name: "Sergey" },
  ];

  let messages = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Здорова брат" },
    { id: 3, message: "Как поживаешь?" },
    { id: 4, message: "Всё потихоньку, скучаю" },
  ];

  let dialogsElemets = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElemets = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsItems}>{dialogsElemets}</div>
      <div className={cl.messages}>{messagesElemets}</div>
    </div>
  );
};

export default Dialogs;
