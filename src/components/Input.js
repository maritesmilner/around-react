import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  validateChange = (e) => {
    this.setState(
      {
        inputName: e.target.name,
        inputValue: e.target.value,
        isInputError: !e.target.validity.valid,
        inputErrorMessage: e.target.validationMessage,
      },
      () => this.props.onInputChange(this.state)
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
          ref={this.props.refs}
          defaultValue={this.props.defaultValue}
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
