import React from 'react';
import CloseButton from './CloseButton.js'

export default function ImagePopup(props) {
  return (
    <section className="place-popup hide">
      <div className="overlay overlay_opacity_darker"></div>
      <div className="form form_display_pic">
        <img className="form__pic" src={props.image} alt={props.title} />
        <p className="form__pic-name">{props.title}</p>
        <CloseButton onClose={props.onClose} />
      </div>
    </section>
  );
}
