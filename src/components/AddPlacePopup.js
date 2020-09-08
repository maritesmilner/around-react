import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

export default function AddPlacePopup(props) {
  const [values, setValues] = React.useState({});

  function handleChange(e) {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(values.name, values.link);
  }

  return (
    <PopupWithForm
      title="New place"
      name="new-place-form"
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonLabel="Create"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        name="name"
        value={values.name}
        placeHolder="Title"
        minLength="0"
        maxLength="30"
        isRequired={true}
        onChange={handleChange}
      />
      <Input
        type="url"
        name="link"
        value={values.link}
        placeHolder="Image Link"
        isRequired={true}
        onChange={handleChange}
      />
    </PopupWithForm>
  );
}
