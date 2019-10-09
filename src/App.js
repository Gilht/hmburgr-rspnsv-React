/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona';
  
/* eslint-disable */
class App extends Component {
  state = {   
    persons: [
      { id:'1', nombre: 'alberto', edad: 45 },
      { id:'2', nombre: '', edad: 49 },
      { id:'3', nombre: 'Julia Rdz', edad: 32 }
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

  //Cambia cuando tecleo algo en el espacio en blanco en automatico, solo funciona si tecleabamos algo en el espacio de otra forma no 
  changedNameHandler = (e, id) => {
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
                    key = {persons.id}
                    changed = {(e) => this.changedNameHandler(e, person.id)}            
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



