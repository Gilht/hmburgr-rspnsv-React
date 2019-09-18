import React, { Component } from 'react';
import './App.css';
import Person from './Persona/Persona';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { nombre: 'Maximilian', edad: 28 },
        { nombre: 'Manu', edad: 29 },
        { nombre: 'Stephanie', edad: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <persona
          nombre={this.state.persons[0].nombre}
          edad={this.state.persons[0].edad}
        />
        <Persona
          nombre={this.state.persons[1].nombre}
          edad={this.state.persons[1].edad}
        >
          My Hobbies: Racing
        </Persona>
        <Persona
          nombre={this.state.persons[2].nombre}
          edad={this.state.persons[2].edad}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;



