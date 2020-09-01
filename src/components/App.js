import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import Input from './Input.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const closeAllPopups = () => {
    if(isEditProfilePopupOpen) {
      setIsEditProfilePopupOpen(false);
    }
    if(isAddPlacePopupOpen) {
      setIsAddPlacePopupOpen(false);
    }
    if(isEditAvatarPopupOpen) {
      setIsEditAvatarPopupOpen(false);
    }
    if(isImagePopupOpen) {
      setSelectedCard({});
      setIsImagePopupOpen(false);
    }
  }

  return (
    <div className="page">
    <Header />
    <Main onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
    />
    <PopupWithForm title="Edit profile" name="edit-profile-form"
    isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} submitButtonLabel="Save">
      <Input type="text" name="name" placeHolder="Name" minLength="2" maxLength="40" isRequired={true} />
      <Input type="text" name="about" placeHolder="Title" minLength="2" maxLength="200" isRequired={true} />
    </PopupWithForm>

    <PopupWithForm title="New place" name="new-place-form"
    isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitButtonLabel="Create">
      <Input type="text" name="name" placeHolder="Title" minLength="0" maxLength="30" isRequired={true} />
      <Input type="url" name="link" placeHolder="Image Link" isRequired={true} />
    </PopupWithForm>

    <PopupWithForm title="Change profile picture" name="edit-profile-picture"
    isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} submitButtonLabel="Save">
      <Input type="url" name="image-link" placeHolder="Image Link" isRequired={true} />
    </PopupWithForm>

    <ImagePopup image={selectedCard.link} title={selectedCard.name} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    <Footer />
  </div>
  );
}

export default App;
