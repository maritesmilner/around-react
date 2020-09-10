import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

const AddPlacePopup = (props) => {
  const [values, setValues] = React.useState({});
  const [errorFlags, setErrorFlags] = React.useState({});

  const handleChange = ({ inputName, inputValue, isInputError }) => {
    setValues({ ...values, [inputName]: inputValue });
    setErrorFlags({ ...errorFlags, [inputName]: isInputError });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace(values.name, values.link);
  };

  return (
    <PopupWithForm
      title="New place"
      name="new-place-form"
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonLabel={props.isSaving ? "Saving..." : "Create"}
      onSubmit={handleSubmit}
      errorFlags={errorFlags}
    >
      <Input
        type="text"
        name="name"
        value={values.name}
        placeHolder="Title"
        minLength="0"
        maxLength="30"
        isRequired={true}
        onInputChange={handleChange}
      />
      <Input
        type="url"
        name="link"
        value={values.link}
        placeHolder="Image Link"
        isRequired={true}
        onInputChange={handleChange}
      />
    </PopupWithForm>
  );
};

export default AddPlacePopup;
