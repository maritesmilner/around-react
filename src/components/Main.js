import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import Input from './Input.js';
import api from '../utils/Api.js';
import Card from './Card.js';

export default function Main(props) {
  const [username, setUsername] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((user) => {
      setUsername(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    })
    .catch((err) => console.log(err))
  },[]);

  React.useEffect(() => {
    api.getCards()
    .then((cards) => setCards(cards))
    .catch((err) => console.log(err))
  },[]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt="profile" className="profile__avatar" />
          <img src="./images/edit-button.svg" alt="edit profile"
            className="edit-button edit-button_place_avatar"
            onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name">{username}</h1>
            <button className="edit-button" type="button" aria-label="edit profile"
              form="edit-profile" id="edit-profile-button"
              onClick={props.onEditProfile}>
            </button>
          </div>
          <p className="profile__title">{userDescription}</p>
        </div>
        <button className="add-button" type="button" name="open-button"
          onClick={props.onAddPlace} >
        </button>
      </section>
      <section className="elements">
        <ul className="places">
          {cards.map(card => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>

      <PopupWithForm title="Edit profile" name="edit-profile-form"
      isOpen={false} onClose={props.onClose} submitButtonLabel="Save">
        <Input type="text" name="name" placeHolder="Name" minLength="2" maxLength="40" isRequired={true} />
        <Input type="text" name="about" placeHolder="Title" minLength="2" maxLength="200" isRequired={true} />
      </PopupWithForm>

      <PopupWithForm title="New place" name="new-place-form"
      isOpen={false} onClose={props.onClose} submitButtonLabel="Create">
        <Input type="text" name="name" placeHolder="Title" minLength="0" maxLength="30" isRequired={true} />
        <Input type="url" name="link" placeHolder="Image Link" isRequired={true} />
      </PopupWithForm>

      <PopupWithForm title="Are you sure?" name="confirm-popup"
      isOpen={false} onClose={props.onClose} submitButtonLabel="Yes" isConfirmPopup={true}/>

      <PopupWithForm title="Change profile picture" name="edit-profile-picture"
      isOpen={false} onClose={props.onClose} submitButtonLabel="Save">
        <Input type="url" name="image-link" placeHolder="Image Link" isRequired={true} />
      </PopupWithForm>

      <ImagePopup image={props.card.link} title={props.card.name} isOpen={false} onClose={props.onClose} />
    </main>
  );
}
