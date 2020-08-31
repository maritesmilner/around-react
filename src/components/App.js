import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    const imagePopupElement = document.querySelector('.place-popup');
    imagePopupElement.querySelector('.form__pic').src = card.link;
    imagePopupElement.querySelector('.form__pic-name').textContent = card.name;
    imagePopupElement.classList.remove('hide');
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }
  const handleEditAvatarClick = () => {
    document.querySelector('.edit-profile-picture').classList.remove('hide');
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    document.querySelector('.edit-profile-form').classList.remove('hide');
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    document.querySelector('.new-place-form').classList.remove('hide');
    setIsAddPlacePopupOpen(true);
  };
  const closeAllPopups = () => {
    if(isEditProfilePopupOpen) {
      document.querySelector('.edit-profile-form').classList.add('hide');
      setIsEditProfilePopupOpen(false);
    }
    if(isAddPlacePopupOpen) {
      document.querySelector('.new-place-form').classList.add('hide');
      setIsAddPlacePopupOpen(false);
    }
    if(isEditAvatarPopupOpen) {
      document.querySelector('.edit-profile-picture').classList.add('hide');
      setIsAddPlacePopupOpen(false);
    }
    if(isImagePopupOpen) {
      document.querySelector('.place-popup').classList.add('hide');
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
      onClose={closeAllPopups}
      onCardClick={handleCardClick}
      card={selectedCard} />
    <Footer />
  </div>
  );
}

export default App;
