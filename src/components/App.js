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
      isEditProfilePopupOpen={isEditProfilePopupOpen}
      onAddPlace={handleAddPlaceClick}
      isAddPlacePopupOpen={isAddPlacePopupOpen}
      onEditAvatar={handleEditAvatarClick}
      isEditAvatarPopupOpen={isEditAvatarPopupOpen}
      onCardClick={handleCardClick}
      isImagePopupOpen={isImagePopupOpen}
      onClose={closeAllPopups}
      card={selectedCard} />
    <Footer />
  </div>
  );
}

export default App;
