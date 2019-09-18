import React from 'react'; 

// este es un stateless compntnt// 

const persona = (props) => {
    return <p>Me presento mi nombre es : {props.nombre},  tengo :{props.edad} años.  </p>
};

export default persona;     