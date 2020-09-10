import React from "react";
import Card from "./Card.js";
import editIcon from "../images/edit-button.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt="profile"
            className="profile__avatar"
          />
          <img
            src={editIcon}
            alt="edit profile"
            className="edit-button edit-button_place_avatar"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="edit-button"
              type="button"
              aria-label="edit profile"
              form="edit-profile"
              id="edit-profile-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__title">{currentUser.about}</p>
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
          {props.cards.map((card, i) => (
            <Card
              card={card}
              key={i}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
