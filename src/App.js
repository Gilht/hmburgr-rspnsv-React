/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona';

/* eslint-disable */
class App extends Component {
  state = {   
    persons: [
      { nombre: 'alberto', edad: 45 },
      { nombre: '', edad: 49 },
      { nombre: 'Julia Rdz ', edad: 32 }
    ],
    otherState: 'set txt en el o.state , aun no se ha cambiado nada ',
    showPersons: false
  };

  switchNameHandler = (nombre) => {
    // console.log('');
    this.setState({
      persons: [
        { nombre: nombre, edad: 28 },
        { nombre: '', edad: 29 },
        { nombre: 'yolanda', edad: 27 }
         
      ],
      otherState: 'aqui ya se cambio el state alterno por el nuevo al momento de darle click'
    });
    console.log(this.state.otherState) //solo cabia cuando le damos soble click //
  };

  changedNameHandler = (e) => {
    // console.log('');
    this.setState({
      persons: [
        { nombre: 'random', edad: 28 },
        { nombre: e.target.value, edad: 40 },
        { nombre: 'Stephanie', edad: 27 }
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState ({
      showPersons: true 
    })
  } 

  render() {
    // EN ESTA CONSTANTE SE APLICAN LOS ESTILOS EN LINEA 
    const style = {
      backgroundColor: 'white',   
      padding:'10px',
      border: '2px solid blue',
      cursor:'pointer',
  };

  //este if es el necesario para hacer el contenido condicional// 
  let persons = null;

  
  if(this.state.showPersons){
   persons = (                   //tiene que tener igual ya que le asignaremos contenido a la variable y no dejarlo como funcion: persons()
      <div>
            <Persona
              nombre={this.state.persons[0].nombre} 
              edad={this.state.persons[0].edad}
              click={this.switchNameHandler.bind(this,'nombreconBind')}
            />
            
            <Persona
              nombre={this.state.persons[1].nombre}
            edad={this.state.persons[1].edad}
              changed={this.changedNameHandler} 
            >
              My Hobbies: Racing
            
            </Persona>

            <Persona
              nombre={this.state.persons[2].nombre}
              edad={this.state.persons[2].edad}
            />
        </div>
    );       // <-- cerramos con ; ya que se interpreta como un objeto el cual cerramos 
  }
   else {(this.state.showPersons) ;}

    return (

      <div className="App">
        <h1>Switching </h1>
        
          <button style={style} onClick={this.togglePersonsHandler}> Mostrar contenido</button>
          {persons}
        
          {/* boton para cambiar los nombres con los del otro estado */}
          <button className="btn btn-success" onClick={() => this.switchNameHandler('Nombre que asigno swith NameHandler')}>Switchear estado </button>
      </div>
    );
  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;



