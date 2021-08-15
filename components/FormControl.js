import React from 'react';

const FormControl = (props) => {
  return (
    <div className="form_control">
      <label htmlFor={props.htmlFor}>{props.children}</label>
      <input
        type={props.type}
        id={props.id}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormControl;