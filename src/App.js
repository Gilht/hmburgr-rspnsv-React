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

  //Cambia cuando clickeo el boton de switch
  // switchNameHandler = (nombre) => {
  //   // console.log('');
  //   this.setState({
  //     persons: [
  //       { nombre: nombre, edad: 28 },
  //       { nombre: '', edad: 29 },
  //       { nombre: 'yolanda', edad: 27 }
         
  //     ],
  //     otherState: 'aqui ya se cambio el state alterno por el nuevo al momento de darle click'
  //   });
  //   console.log(this.state.otherState) //solo cabia cuando le damos soble click //
  // };

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

  //Cambia cuando tecleo algo en el espacio en blanco en automatico
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
  //Es la funcion que muestra contenido bajo condiciones
  togglePersonsHandler = () => {
    const mostrar = this.state.showPersons;
    this.setState({showPersons: !mostrar });
  } 

  render() {
    // EN ESTA CONSTANTE SE APLICAN LOS ESTILOS EN LINEA 
    const style = {
      backgroundColor: 'white',   
      padding:'10px',
      border: '2px solid blue',
      cursor:'pointer',
  };
  const fonts = { 
    fontfamily: 'GillSans',
    fontsize: '24px',
    textdecoration: 'underline',
    color: '#ffffff'
  };

  //este if es el necesario para hacer el contenido condicional// 
  let persons = null;

  
  if(this.state.showPersons){
   persons = (           //tiene que tener igual ya que le asignaremos contenido a la variable y no dejarlo como funcion: persons()
      <div>
        {this.state.persons.map((persons,index) => {
            return  <Persona
                    nombre = {persons.nombre} 
                    edad = {persons.edad}
                    click = {() => this.deletePersonsHandler(index)}
                    />
           })}
      </div>          
    );      
  }

    return (

      <div className="App">
        <h1 style={fonts} >Switching </h1>
        
          <button style={style} onClick={this.togglePersonsHandler}> Mostrar contenido</button>
          
          {/* boton para cambiar los nombres con los del otro estado */}
          <button  className="btn btn-success" >Switchear estado </button>
          {persons}
      </div>
    );
    // onClick={() => this.switchNameHandler('Nombre que asigno swith NameHandler')}------ esto va en el button de arriba como atributo

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;



