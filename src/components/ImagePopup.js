import React from 'react';

export default function ImagePopup(props) {
  return (
    <section className="place-popup hide">
      <div className="overlay overlay_opacity_darker"></div>
      <div className="form form_display_pic">
        <img className="form__pic" src={props.image} />
        <p className="form__pic-name">{props.title}</p>
        <button type="button" className="form__close-button"></button>
      </div>
    </section>
  );
}
