import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter();

    return (
        <div className="container">
            <h1>Counter with App: { state }</h1>
            
            <button
                className = "btn btn-primary m-2"
                onClick={ increment}
            >
                +1
            </button>

            <button 
                className="btn btn-warning"
                onClick={ reset }
            >
                Reset
            </button>

            < button
                className = "btn btn-danger m-2"
                onClick={ decrement } 
            >
                -1 
            </button>
        </div>
    )
}
