import React, { useState } from "react";
import ListContent from "./ListContent";
import Form from "./Form/Form";

const List = props => {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  function swap(arr, a, b) {
    arr[a] = arr.splice(b, 1, arr[a])[0];
  }

  const addPostSubmit = () => {
    if (post !== "") {
      setPosts([...posts, post]);
      setPost("");
    }
  };
  const upPost = index => {
    let arr = [...posts];
    swap(arr, index, Number(index) - 1);
    setPosts(arr);
  };
  const downPost = index => {
    let arr1 = [...posts];
    swap(arr1, index, Number(index) + 1);
    setPosts(arr1);
  };
  const deletePost = i => {
    setPosts(
      posts.filter((post, index) => {
        return index !== Number(i);
      })
    );
  };

  return (
    <ul style={{ border: "1px solid green" }}>
      <ListContent
        content={posts}
        upPost={upPost}
        downPost={downPost}
        deletePost={deletePost}
      />
      <li style={{ listStyleType: "none" }}>
        <Form setPost={setPost} post={post} addPostSubmit={addPostSubmit} />
      </li>
    </ul>
  );
};

export default List;
