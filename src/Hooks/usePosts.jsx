import { useState } from "react";

function usePosts() {
  const [posts, setPosts] = useState([
    {
      title: "test post",
      message: "testing this stuff!",
    },
  ]);

  const updatePostList = (post) => {
    setPosts([...posts, post]);
  };
  
  return [posts, updatePostList];
}

export default usePosts;
