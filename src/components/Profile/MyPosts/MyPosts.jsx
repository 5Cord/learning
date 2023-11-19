import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", likeCount: "15" },
    { id: 2, message: "It's my first post", likeCount: "20" },
    {
      id: 2,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, asperiores rerum sequi architecto dolore perferendis commodi a numquam repudiandae corporis fuga vel laborum sunt ducimus odio, iste possimus et nobis.",
      likeCount: "1",
    },
  ];

  return (
    <div className={cl.wall}>
      <textarea></textarea>
      <div className={cl.BtnWall}>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={cl.HWall}>Wall</div>
      <div className={cl.posts}>
        <Post message={postsData[0].message} like={postsData[0].likeCount} />
        <Post message={postsData[1].message} like={postsData[1].likeCount} />
        <Post message={postsData[2].message} like={postsData[2].likeCount} />
      </div>
    </div>
  );
};

export default MyPosts;
