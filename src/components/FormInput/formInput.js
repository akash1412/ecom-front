import React from 'react';
import './formInput.scss';

const FormInput = (props) => {
  const { value, name, placeholder, type, handleChange, ...otherProps } = props;
  return (
    <input
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default FormInput;
