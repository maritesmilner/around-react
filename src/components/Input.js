import React from "react";

//has to be a class component as ref ref attribute can't be used on function components
//https://reactjs.org/docs/refs-and-the-dom.html
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.value !== prevProps.value) {
      this.setState({ ...this.state, inputValue: this.props.value });
    }
  }

  validateChange = (e) => {
    this.setState(
      {
        ...this.state,
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
          value={this.state.inputValue || ""}
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
