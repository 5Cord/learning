import React from "react";
import cl from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={cl.headerProfile}>
        <img
          src="https://vmrucdn.servicecdn.ru/2022.03/original/622f464082682c0661d0ea02.jpg"
          alt="header"
        ></img>
      </div>
      <div className={cl.ProfileBlock}>
        <div className={cl.avatar}>
          <img
            src="https://sun9-25.userapi.com/impf/c830708/v830708770/3160a/KCiGInMgaqg.jpg?size=834x834&quality=96&sign=3f06dac1d8c478003f8a0ae2b1a76d54&type=album"
            alt=""
          />
        </div>

        <div className={cl.ShortInfoProfile}>
          <div className={cl.FSName}>Dmitriy Vaytovich</div>
          <div className={cl.Discription}>
            https://5cord.github.io/Index.html
          </div>
          <div className={cl.More}>More</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
