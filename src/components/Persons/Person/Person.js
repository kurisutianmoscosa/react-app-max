import React from 'react';
import classes from './Person.css';

const person = props => {
  return (
    <div className={'Person'}>
      <p onClick={props.click}>
        Hello {props.name}! you are {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        placeholder="Input something"
        value={props.value}
      />
    </div>
  );
};

export default person;
