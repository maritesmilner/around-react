import React from "react";

export default function PopupWithForm(props) {
  const [isInputError, setIsInputError] = React.useState(true);
  const children = props.children;

  React.useEffect(() => {
    if (props.errorFlags && Object.keys(props.errorFlags).length > 0) {
      const flagsArr = Object.keys(props.errorFlags);
      const hasEmpty = React.Children.toArray(children).some((child) =>
        child.props.value ? false : true
      );
      hasEmpty
        ? setIsInputError(true)
        : setIsInputError(flagsArr.some((k) => props.errorFlags[k] === true));
    } else {
      //reset form
      setIsInputError(true);
    }
  }, [props.errorFlags, children]);

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
        <button
          type="submit"
          className={`form__save-button ${
            isInputError ? "form__save-button_disabled" : ""
          }`}
          disabled={isInputError}
        >
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
