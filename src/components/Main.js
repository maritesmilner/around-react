import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";
import editIcon from "../images/edit-button.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Main(props) {
  const [cards, setCards] = React.useState([]);
  const user = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(cardId, isLiked) {
    api
      .changeLikeCardStatus(cardId, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === cardId ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(cardId) {
    api
      .removeCard(cardId)
      .then((res) => {
        console.log(res);
        const newCards = cards.filter((c) => c._id !== cardId);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={user.avatar} alt="profile" className="profile__avatar" />
          <img
            src={editIcon}
            alt="edit profile"
            className="edit-button edit-button_place_avatar"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name">{user.name}</h1>
            <button
              className="edit-button"
              type="button"
              aria-label="edit profile"
              form="edit-profile"
              id="edit-profile-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__title">{user.about}</p>
        </div>
        <button
          className="add-button"
          type="button"
          name="open-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="places">
          {cards.map((card, i) => (
            <Card
              card={card}
              key={i}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
