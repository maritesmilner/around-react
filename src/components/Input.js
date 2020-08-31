import React from 'react';

export default function Input({type, name, placeHolder, minLength, maxLength, isRequired}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        name={name}
        className={`form__input form__input_type_${name}`}
        id={name}
        minLength={minLength}
        maxLength={maxLength}
        required={isRequired}
      />
      <span className="form__input-error" id={`${name}-error`}></span>
    </>
  );
}
