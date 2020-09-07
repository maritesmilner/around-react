import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const user = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === user._id;
  const cardDeleteButtonClassName = `trash-button ${isOwn ? "" : "hide"}`;
  const isLiked = card.likes.some((i) => i._id === user._id);
  const cardLikeButtonClassName = `like__button ${
    isLiked ? "like__button_active" : ""
  }`;
  return (
    <li className="place">
      <img
        className="place__picture"
        alt="place"
        src={card.link}
        onClick={() => onCardClick(card)}
      />
      <button
        className={cardDeleteButtonClassName}
        onClick={() => onCardDelete(card._id)}
      ></button>
      <div className="place__name-group">
        <h3 className="place__name">{card.name}</h3>
        <div className="like">
          <button
            className={cardLikeButtonClassName}
            onClick={() => onCardLike(card._id, isLiked)}
          ></button>
          <p className="like__count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
