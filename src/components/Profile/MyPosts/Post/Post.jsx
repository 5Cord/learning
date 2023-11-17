import React from "react";
import cl from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={cl.wall}>
      <div className={cl.item}>
        <img
          src="https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"
          alt="avatar"
        ></img>
        <div className={cl.post}>
          <div className={cl.message}> {props.message}</div>
          <div>like: {props.like}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
