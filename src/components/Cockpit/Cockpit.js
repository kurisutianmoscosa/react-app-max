import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    
    return() => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }

  }, []);

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons)
    btnClass = classes.Red;

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={'Cockpit'}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join( ' ' )}>This is react app!</p>
      <button className={btnClass} onClick={props.clicked}>
        Click me!
      </button>
    </div>
  );
};

export default Cockpit;
