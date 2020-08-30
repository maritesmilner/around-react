import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const editAvatarPopupElement = document.querySelector('.edit-profile-picture');
  const addPlacePopupElement = document.querySelector('.new-place-form');
  const editProfilePopupElement = document.querySelector('.edit-profile-form');
  console.log(editProfilePopupElement);
  console.log(addPlacePopupElement);
  console.log(editAvatarPopupElement);

  const handleEditAvatarClick = () => {
    editAvatarPopupElement.classList.remove('hide');
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    this.classList.remove('hide');
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    addPlacePopupElement.classList.remove('hide');
    setIsAddPlacePopupOpen(true);
  };
  const closeAllPopups = () => {
    if(isEditProfilePopupOpen) {
      editProfilePopupElement.classList.add('hide');
      setIsEditProfilePopupOpen(false);
    }
    if(isAddPlacePopupOpen) {
      addPlacePopupElement.classList.add('hide');
      setIsAddPlacePopupOpen(false);
    }
    if(isEditAvatarPopupOpen) {
      editAvatarPopupElement.classList.add('hide');
      setIsAddPlacePopupOpen(false);
    }
  }

  return (
    <div className="page">
    <Header />
    <Main onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onClose={closeAllPopups} />
    <Footer />
  </div>
  );
}

export default App;
