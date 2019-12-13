import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={"Person"}>
        <p onClick={this.props.click}>
          Hello {this.props.name}! you are {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          placeholder="Input something"
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Person;
