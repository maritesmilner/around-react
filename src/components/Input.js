import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <>
        <input
          type={this.props.type}
          placeholder={this.props.placeHolder}
          name={this.props.name}
          className={`form__input form__input_type_${this.props.name}`}
          id={this.props.name}
          minLength={this.props.minLength}
          maxLength={this.props.maxLength}
          required={this.props.isRequired}
          onChange={this.props.onChange}
          defaultValue={this.props.defaultValue}
          ref={this.props.refs}
        />
        <span
          className="form__input-error"
          id={`${this.props.name}-error`}
        ></span>
      </>
    );
  }
}
