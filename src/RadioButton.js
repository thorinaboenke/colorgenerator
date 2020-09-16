import React from 'react';

//this is a component to create a radio button with 5 props, id, onChange, value, type, checked

const RadioButton = (props) => {
  return (
    <div className="RadioButton">
      <input
        id={props.id}
        onChange={props.changed}
        value={props.value}
        type="radio"
        checked={props.isSelected}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default RadioButton;
