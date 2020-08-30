import React from 'react';
import PopupWithForm from './PopupWithForm.js';

export default function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img alt="profile picture" className="profile__avatar" />
          <img src="./images/edit-button.svg" alt="edit profile picture"
            className="edit-button edit-button_place_avatar"
            onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name"></h1>
            <button className="edit-button" type="button" aria-label="edit profile"
              form="edit-profile" id="edit-profile-button"
              onClick={props.onEditProfile}>
            </button>
          </div>
          <p className="profile__title"></p>
        </div>
        <button className="add-button" type="button" name="open-button"
          onClick={props.onAddPlace} >
        </button>
      </section>
      <section className="elements">
        <ul className="places">
        </ul>
      </section>

      <PopupWithForm title="Edit profile" name="edit-profile-form"
      isOpen={false} onClose={props.onClose} />

       <section className="new-place-form hide">
        <div className="overlay"></div>
        <form className="form" id="new-place" novalidate>
          <h2 className="form__title">New place</h2>
          <input type="text" placeholder="Title" name="name" className="form__input form__input_type_title" id="place-title" maxlength="30" required />
          <span className="form__input-error" id="place-title-error"></span>
          <input type="url" placeholder="Image Link" name="link" className="form__input form__input_type_link" id="link" required />
          <span className="form__input-error" id="link-error"></span>
          <button type="submit" className="form__save-button form__save-button_disabled" disabled>
            Create
          </button>
          <button type="button" className="form__close-button"></button>
        </form>
       </section>

       <section className="confirm-popup hide">
        <div className="overlay"></div>
        <form className="form form_confirm_delete" novalidate>
          <h2 className="form__title">Are you sure?</h2>
          <button type="submit" className="form__save-button form__save-button_confirm">
            Yes
          </button>
          <button type="button" className="form__close-button"></button>
        </form>
       </section>
       <section className="edit-profile-picture hide">
        <div className="overlay"></div>
        <form className="form" id="edit-profile-picture" novalidate>
          <h2 className="form__title">Change profile picture</h2>
          <input type="url" placeholder="Image Link" name="link" className="form__input form__input_type_link" id="pic-link" required />
          <span className="form__input-error" id="pic-link-error"></span>
          <button type="submit" className="form__save-button form__save-button_disabled" disabled>
            Save
          </button>
          <button type="button" className="form__close-button"></button>
        </form>
       </section>
    </main>
  );
}
