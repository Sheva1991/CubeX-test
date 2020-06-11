import React from "react";
import ListContent from "./ListContent";
import { createPost, upPost, downPost } from "../redux/actions";
import { connect } from "react-redux";
import { ListReduxForm } from "./Form/Form";
import { reset } from "redux-form";

const List = props => {
  const addPostSubmit = formData => {
    props.createPost(formData.post);
    props.reset("ListForm");
  };
  const upPost = index => {
    props.upPost(index);
  };
  const downPost = index => {
    props.downPost(index);
  };

  console.log(props.content);

  return (
    <ul>
      <ListContent
        content={props.content}
        upPost={upPost}
        downPost={downPost}
      />
      <li style={{ listStyleType: "none" }}>
        <ListReduxForm onSubmit={addPostSubmit} />
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({
  content: state.posts.content
});

export default connect(
  mapStateToProps,
  { createPost, upPost, downPost, reset }
)(List);
