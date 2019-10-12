/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona';
import Radium from 'radium';

/* eslint-disable */
class App extends React.Component {
  state = {   
    persons: [
      { id:'1', nombre: 'Gilberto', edad: 22 },
      { id:'2', nombre: '', edad: 49 },
      { id:'3', nombre: 'Julia Rdz', edad: 32 }
    ],
    otherState: 'set txt en el o.state , aun no se ha cambiado nada ',
    showPersons: false          //tiene influencia sobre si el contenido debe ser mostrado --> this.state.showPersons
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

  //Cambia cuando tecleo algo en el espacio en blanco en automatico, solo funciona si tecleabamos algo en el espacio de otra forma no 
  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
     });

     const person = {
       ...this.state.persons[personIndex] 
     };
      person.nombre = e.target.value;

    const persons = [...this.state.persons];
     persons[personIndex] = person;

    // console.log('');
    this.setState({
      persons: persons
    })
  }

  //Es la funcion que muestra contenido bajo condiciones
  togglePersonsHandler  = () => {
    const mostrar = this.state.showPersons;
    this.setState({
      showPersons: !mostrar });
  } 


  render() {
    // EN ESTA CONSTANTE SE APLICAN LOS ESTILOS EN LINEA 
    const style = {
      backgroundColor: 'red',   
      color: 'white',
      padding:'10px',
      border: '2px solid blue',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'greenlight',
        color:'black'
      }
  };


  const fonts = { 
    fontfamily: 'GillSans',
    fontsize: '24px',
    textdecoration: 'underline',
    color: '#f3f3ff'
  };

  //este if es el necesario para hacer el contenido condicional// 
  let persons = null;

  
  if(this.state.showPersons){
   persons = (           //tiene que tener igual ya que le asignaremos contenido a la variable y no dejarlo como funcion: persons()
      <div>
        {this.state.persons.map((person,index) => {
            return  <Persona
                    nombre = {person.nombre} 
                    edad = {person.edad}
                    click = {() => this.deletePersonsHandler(index)}
                    key = {person.id}
                    changed = {(e) => this.nameChangeHandler(e, person.id)}            
                    />
           })}
      </div>          
    );      
    style.backgroundColor = 'red';      //aqui asignamos un valor nuevo para el estilo, como es JS accedimos al objeto 
    style.padding = '15px';         //objeto style con su elemento .padding y le asignamos un nuevo valor 

        style[':hover']={
      backgroundColor:'salmon',
      color:'black'
    };
  }

      const clases = [];

      if(this.state.persons.length <= 2 ){   //clases = ['red'];
        clases.push('red');
      }

      if(this.state.persons.length <=1 ){  //clases = ['red','bold'];
        clases.push('bold');
      }

    return (

      <div className="App">
        <h1 style={fonts} >Switching </h1>
         <p className={clases.join('')}> Soy una app echa con React </p>
          <button
           style={style} onClick={this.togglePersonsHandler}> Mostrar contenido</button>
          
          {/* boton para cambiar los nombres con los del otro estado */}
          <button  className="btn btn-success" >Switchear estado </button>
          {persons}
      </div>
    );
    // onClick={() => this.switchNameHandler('Nombre que asigno swith NameHandler')}------ esto va en el button de arriba como atributo

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium (App);



