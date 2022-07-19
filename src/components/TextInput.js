import React from 'react';

const TextInput = (props) => {
  let { name, change, text } = props;
  return (
    <label htmlFor={name} className={name}>
      <span>{text}</span>
      <input type="text" name={name} onChange={change}></input>
    </label>
  );
};

export default TextInput;