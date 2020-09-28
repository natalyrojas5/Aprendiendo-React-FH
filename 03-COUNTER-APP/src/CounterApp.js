// RAFCP --> SNIPPER 

import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value = 10}) =>{

    const [ counter, setCounter] = useState(value);

    const handleAdd = () => setCounter((counter) =>  counter + 1);
    

    const reset = () => setCounter( value);
    
    const handleSubtract = () => setCounter((counter) => counter - 1)
    

    return (
        <>
            <h1>Counter App</h1>
            <h1 id="counter">{counter}</h1>

            <button onClick = { handleAdd } >+1</button>
            <button onClick = {reset } >Reset</button>
            <button onClick = {  handleSubtract }>-1</button>
        </>
    );
}


export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number
}


