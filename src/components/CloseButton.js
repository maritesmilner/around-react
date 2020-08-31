import React from 'react';

export default function CloseButton({onClose}) {
  return (
    <button type="button" className="form__close-button" onClick={onClose}></button>
  );
}
