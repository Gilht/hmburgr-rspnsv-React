import React  from 'react'; 
import './Persona.css'
// este es un stateless compntnt// 

const persona = (props) => {
    return(
        <div className="Persona">
         <p onClick={props.click}>Me presento mi nombre es : {props.nombre},  tengo :{props.edad} años.  </p>
         <input type="text" placeholder="Escribe un nombre y edad " onChange={props.changed}  value={props.nombre} />  
         </div>
    )
};

export default persona;     