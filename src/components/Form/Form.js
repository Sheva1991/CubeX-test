import React from "react";
import { reduxForm, Field } from "redux-form";

const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="post" type="text" component="input" />
      <button>Add</button>
    </form>
  );
};

export const ListReduxForm = reduxForm({
  // a unique name for the form
  form: "ListForm"
})(Form);
