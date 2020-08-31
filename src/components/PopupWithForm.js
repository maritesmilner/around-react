import React from 'react';
import CloseButton from './CloseButton.js'

export default function PopupWithForm(props) {

  return (
    <section className={props.isOpen ? `${props.name}` : `${props.name} hide`}>
      <div className="overlay"></div>
      <form className="form" id="edit-profile" noValidate>
        <h2 className="form__title">{props.title}</h2>
        {props.children}
        <button type="submit" className="form__save-button form__save-button_disabled" disabled>{
          props.submitButtonLabel}
        </button>
        <CloseButton onClose={props.onClose} />
      </form>
   </section>
  );
}
