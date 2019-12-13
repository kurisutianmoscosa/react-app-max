import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Christian', age: 26 },
      { id: 2, name: 'Kurisutian', age: 25 },
      { id: 3, name: 'Shurikit', age: 24 }
    ],
    otherState: 'Some other value',
    showPerons: false
  };

  nameChangeHandler = (event, id) => {
    //Find item using findIndex
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //Find and copy the item using spread
    const person = {
      ...this.state.persons[personIndex]
    };

    //Assign the value to a property
    person.name = event.target.value;

    //Copy the object and replace the property
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //Update the state with the new value
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerons;
    this.setState({ showPerons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPerons) {
      persons = 
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }

    return (
      <div className={'App'}>
        <Cockpit
          title={this.props.appTitle}
          showPerons={this.state.showPerons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
