import React  from 'react'; 
import './Persona.css';
import 'bootstrap/dist/css/bootstrap.css';
import Radium from 'radium';
// este es un stateless compntnt// 

const persona = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return(
     <div className="container jumbotron" >
            <div className="Persona " style ={style} >
                <p onClick={props.click}>Me presento mi nombre es : {props.nombre},  tengo :{props.edad} años.  </p>
                <input type="text" placeholder="Escribe un nombre y edad " onChange={props.changed}  value={props.nombre} />  
            </div>
      </div>
    )
};

export default Radium(persona);     