import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

class EditAvatarPopup extends React.Component {
  constructor(props) {
    super(props);
    //createRef is for class components, for functional components, use useRef
    this.avatarRef = React.createRef();
    this.state = {};
  }

  handleChange = ({ inputName, isInputError, inputValue }) => {
    //only collect error status as value is passed by ref according to project brief.
    this.setState({
      inputError: { [inputName]: isInputError },
      value: inputValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdateAvatar(this.avatarRef.current.value);
    this.setState({
      value: "",
      inputError: {},
    });
  };

  render() {
    return (
      <PopupWithForm
        title="Change profile picture"
        name="edit-profile-picture"
        isOpen={this.props.isOpen}
        onClose={this.props.onClose}
        submitButtonLabel={this.props.isSaving ? "Saving..." : "Save"}
        onSubmit={this.handleSubmit}
        errorFlags={this.state.inputError}
      >
        <Input
          type="url"
          name="image-link"
          refs={this.avatarRef}
          placeHolder="Image Link"
          isRequired={true}
          onInputChange={this.handleChange}
          value={this.state.value}
        />
      </PopupWithForm>
    );
  }
}

export default EditAvatarPopup;
