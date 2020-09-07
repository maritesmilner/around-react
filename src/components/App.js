import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Input from "./Input";
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

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

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUserUpdate = (user) => {
    api
      .updateUserInfo(user)
      .then((res) => {
        setCurrentUser(res);
        setIsEditProfilePopupOpen(false);
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

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUserUpdate}
        />
        <PopupWithForm
          title="New place"
          name="new-place-form"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          submitButtonLabel="Create"
        >
          <Input
            type="text"
            name="name"
            placeHolder="Title"
            minLength="0"
            maxLength="30"
            isRequired={true}
          />
          <Input
            type="url"
            name="link"
            placeHolder="Image Link"
            isRequired={true}
          />
        </PopupWithForm>

        <PopupWithForm
          title="Change profile picture"
          name="edit-profile-picture"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          submitButtonLabel="Save"
        >
          <Input
            type="url"
            name="image-link"
            placeHolder="Image Link"
            isRequired={true}
          />
        </PopupWithForm>

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
