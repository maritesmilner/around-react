import React from 'react';

export default function Card({card, onCardClick}) {
  return (
    <li className="place" key={card._id}>
      <img className="place__picture" alt="place" src={card.link} onClick={()=>onCardClick(card)}/>
      <button className="trash-button"></button>
      <div className="place__name-group">
        <h3 className="place__name">{card.name}</h3>
        <div className="like">
          <button className="like__button"></button>
          <p className="like__count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
