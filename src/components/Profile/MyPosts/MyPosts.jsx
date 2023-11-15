import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      MyPosts
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
      <div>New posts</div>
      <div className={cl.posts}>
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
