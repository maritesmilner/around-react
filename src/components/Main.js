import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import editIcon from '../images/edit-button.svg';

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
          <img src={editIcon} alt="edit profile"
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
          {cards.map((card, i) => (
            <Card card={card} key={i} onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}
