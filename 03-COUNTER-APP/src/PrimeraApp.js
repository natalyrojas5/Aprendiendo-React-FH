// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// FUNCTION COMPONENT
const PrimeraApp = ({saludo, subtitulo}) =>{
    return (
        <>
            <h1>{saludo }</h1>
            <p>{subtitulo}</p>
        </>
    );
}

// OBLIGA" A QUE LAS PROPIEDADES TENGAN UN TIPO DEFINIDO
// En el ejemplo "obliga" a que la propiedad *saludo* sea de tipo string, caso contrario mostrará un error en la consola

PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired
}

// Valores por defecto de las propiedades de mi componente PrimeraApp

PrimeraApp.defaultProps ={
    subtitulo : ''
}

export default PrimeraApp;