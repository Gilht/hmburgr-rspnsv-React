import React  from 'react'; 

// este es un stateless compntnt// 

const persona = (props) => {
    return(
        <div>
         <p onClick={props.click}>Me presento mi nombre es : {props.nombre},  tengo :{props.edad} años.  </p>
         <input type="text" onChange={props.changed}  value={props.nombre}/>  
         </div>
    )
};

export default persona;     