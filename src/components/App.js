import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isSaving, setIsSaving] = React.useState(false);
  const [editProfileChildCount, setEditProfileChildCount] = React.useState(0);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(err));

    api
      .getCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);

  const handleUserUpdate = (user) => {
    setIsSaving(true);
    api
      .updateUserInfo(user)
      .then((res) => {
        setCurrentUser(res);
        setIsSaving(false);
        setIsEditProfilePopupOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const handleAddPlace = (name, link) => {
    setIsSaving(true);
    api
      .addCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setIsSaving(false);
        setIsAddPlacePopupOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = (cardId, isLiked) => {
    api
      .changeLikeCardStatus(cardId, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === cardId ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (cardId) => {
    api
      .removeCard(cardId)
      .then((res) => {
        console.log(res);
        const newCards = cards.filter((c) => c._id !== cardId);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  };

  const handleAvatarUpdate = (avatar) => {
    setIsSaving(true);
    api
      .updateUserAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        setIsSaving(false);
        setIsEditAvatarPopupOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };
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
    if (isEditProfilePopupOpen) {
      setIsEditProfilePopupOpen(false);
    }
    if (isAddPlacePopupOpen) {
      setIsAddPlacePopupOpen(false);
    }
    if (isEditAvatarPopupOpen) {
      setIsEditAvatarPopupOpen(false);
    }
    if (isImagePopupOpen) {
      setSelectedCard({});
      setIsImagePopupOpen(false);
    }
  };

  const editProfileChildrenCounter = (count) => {
    setEditProfileChildCount(count);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUserUpdate}
          isSaving={isSaving}
          childCounter={editProfileChildrenCounter}
          childCount={editProfileChildCount}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleAvatarUpdate}
          isSaving={isSaving}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          isSaving={isSaving}
        />
        <ImagePopup
          image={selectedCard.link}
          title={selectedCard.name}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
