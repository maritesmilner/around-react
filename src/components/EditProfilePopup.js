import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const [values, setValues] = React.useState({});
  const [errorFlags, setErrorFlags] = React.useState({ name: true });
  const currentUser = React.useContext(CurrentUserContext);
  const [isInputError, setIsInputError] = React.useState(true);

  React.useEffect(() => {
    setIsInputError(
      Object.keys(errorFlags).some(function (k) {
        return errorFlags[k] === true;
      })
    );
  }, [errorFlags]);

  function handleChange(e, errorFlag) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setErrorFlags({
      ...errorFlags,
      [e.target.name]: errorFlag,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      ...currentUser,
      ...values,
    });
  }

  return (
    <PopupWithForm
      title="Edit profile"
      name="edit-profile-form"
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonLabel="Save"
      onSubmit={handleSubmit}
      isInputError={isInputError}
    >
      <Input
        type="text"
        name="name"
        defaultValue={currentUser.name}
        value={values.name}
        placeHolder="Name"
        minLength="2"
        maxLength="40"
        isRequired={true}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="about"
        defaultValue={currentUser.about}
        value={values.about}
        placeHolder="Title"
        minLength="2"
        maxLength="200"
        isRequired={true}
        onChange={handleChange}
      />
    </PopupWithForm>
  );
}
