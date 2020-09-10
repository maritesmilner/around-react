import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

class EditAvatarPopup extends React.Component {
  constructor(props) {
    super(props);
    this.avatarRef = React.createRef();
    this.state = {};
  }

  handleChange = ({ inputName, isInputError }) => {
    //only collect error status as value is passed by ref according to project brief.
    this.setState({ ...this.state, [inputName]: isInputError });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdateAvatar(this.avatarRef.current.value);
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
        errorFlags={this.state}
      >
        <Input
          type="url"
          name="image-link"
          refs={this.avatarRef}
          placeHolder="Image Link"
          isRequired={true}
          onInputChange={this.handleChange}
        />
      </PopupWithForm>
    );
  }
}

export default EditAvatarPopup;
