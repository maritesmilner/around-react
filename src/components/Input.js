import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInputError: false, inputErrorMessage: "" };
  }
  validateChange = (e) => {
    e.persist();
    e.target.validity.valid
      ? this.setState({ isInputError: false, inputErrorMessage: "" }, () =>
          this.props.onChange(e, this.state.isInputError)
        )
      : this.setState(
          { isInputError: true, inputErrorMessage: e.target.validationMessage },
          () => this.props.onChange(e, this.state.isInputError)
        );
  };

  render() {
    return (
      <>
        <input
          type={this.props.type}
          placeholder={this.props.placeHolder}
          name={this.props.name}
          className={`form__input form__input_type_${this.props.name} ${
            this.state.isInputError ? "form__input_type_error-indicator" : ""
          }`}
          id={this.props.name}
          minLength={this.props.minLength}
          maxLength={this.props.maxLength}
          required={this.props.isRequired}
          onChange={this.validateChange}
          defaultValue={this.props.defaultValue}
          ref={this.props.refs}
        />
        <span
          className={`form__input-error ${
            this.state.isInputError ? "form__input-error-msg" : ""
          }`}
          id={`${this.props.name}-error`}
        >
          {this.state.inputErrorMessage}
        </span>
      </>
    );
  }
}
