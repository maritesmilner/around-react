import React from 'react';

export default function PopupWithForm(props) {
  return (
    <section className={`${props.name} hide`} >
      <div className="overlay"></div>
      <form className="form" id="edit-profile" noValidate>
        <h2 className="form__title">{props.title}</h2>
        <input type="text" placeholder="Name" name="name" className="form__input form__input_type_name" id="name" minLength="2" maxLength="40" required />
        <span className="form__input-error" id="name-error"></span>
        <input type="text" placeholder="Title" name="about" className="form__input form__input_type_title" id="title" minLength="2" maxLength="200" required />
        <span className="form__input-error" id="title-error"></span>
        <button type="submit" className="form__save-button form__save-button_disabled" disabled>
          Save
        </button>
        <button type="button" className="form__close-button" onClick={props.onClose}></button>
      </form>
   </section>
  );
}
