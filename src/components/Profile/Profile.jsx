import React from "react";
import cl from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={cl.content}>
      <div>
        header
        <img
          src="https://vmrucdn.servicecdn.ru/2022.03/original/622f464082682c0661d0ea02.jpg"
          alt="header"
        ></img>
      </div>
      <div>ava + discription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
