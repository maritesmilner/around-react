import React from "react";

export default function PopupWithForm(props) {
  const submitButtonClassName = `form__save-button ${
    props.isInputError ? "form__save-button_disabled" : ""
  }`;
  return (
    <section className={props.isOpen ? `${props.name}` : `${props.name} hide`}>
      <div className="overlay"></div>
      <form
        className="form"
        id="edit-profile"
        onSubmit={props.onSubmit}
        noValidate
      >
        <h2 className="form__title">{props.title}</h2>
        {props.children}
        <button type="submit" className={submitButtonClassName}>
          {props.submitButtonLabel}
        </button>
        <button
          type="button"
          className="form__close-button"
          onClick={props.onClose}
        ></button>
      </form>
    </section>
  );
}
