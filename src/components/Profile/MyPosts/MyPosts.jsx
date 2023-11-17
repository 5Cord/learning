import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={cl.wall}>
      <textarea></textarea>
      <div className={cl.BtnWall}>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={cl.HWall}>Wall</div>
      <div className={cl.posts}>
        <Post message="Hi, how are you?" like="15" />
        <Post message="It's my first post" like="20" />
        <Post
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, asperiores rerum sequi architecto dolore perferendis commodi a numquam repudiandae corporis fuga vel laborum sunt ducimus odio, iste possimus et nobis."
          like="1"
        />
      </div>
    </div>
  );
};

export default MyPosts;
