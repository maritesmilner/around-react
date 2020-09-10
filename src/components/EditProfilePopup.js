import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [errorFlags, setErrorFlags] = React.useState({});
  const currentUser = React.useContext(CurrentUserContext);
  const [values, setValues] = React.useState({});

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({
    inputName,
    inputValue,
    isInputError,
    inputErrorMessage,
  }) => {
    setValues({ ...values, [inputName]: inputValue });
    setErrorFlags({ ...errorFlags, [inputName]: isInputError });
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      ...currentUser,
      ...values,
    });
    setValues({});
  }

  return (
    <PopupWithForm
      title="Edit profile"
      name="edit-profile-form"
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonLabel={props.isSaving ? "Saving..." : "Save"}
      onSubmit={handleSubmit}
      errorFlags={errorFlags}
    >
      <Input
        type="text"
        name="name"
        value={values.name}
        placeHolder="Name"
        minLength="2"
        maxLength="40"
        isRequired={true}
        onInputChange={handleChange}
        defaultValue={values.name}
      />
      <Input
        type="text"
        name="about"
        value={values.about}
        placeHolder="Title"
        minLength="2"
        maxLength="200"
        isRequired={true}
        onInputChange={handleChange}
        defaultValue={values.about}
      />
    </PopupWithForm>
  );
}
export default EditProfilePopup;
