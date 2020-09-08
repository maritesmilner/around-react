import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

class EditAvatarPopup extends React.Component {
  constructor(props) {
    super(props);
    this.avatarRef = React.createRef();
  }

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
        submitButtonLabel="Save"
        onSubmit={this.handleSubmit}
      >
        <Input
          type="url"
          name="image-link"
          refs={this.avatarRef}
          placeHolder="Image Link"
          isRequired={true}
        />
      </PopupWithForm>
    );
  }
}

export default EditAvatarPopup;
