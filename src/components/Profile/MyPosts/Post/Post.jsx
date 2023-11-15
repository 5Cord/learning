import React from "react";
import cl from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={cl.item}>
        <img
          src="https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"
          alt="avatar"
        ></img>
        Post 1<div>like</div>
      </div>
    </div>
  );
};

export default Post;
