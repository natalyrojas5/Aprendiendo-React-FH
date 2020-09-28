import React, { useState } from 'react'

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2 } = counter;
    return (
        <div className="container text-center">
            <h1>USESTATE</h1>
            <h2>Counter1: { counter1 } </h2>
            <h2>Counter2: { counter2 } </h2>
            <button
                className="btn btn-primary m-2"
                onClick={
                    ()=> setCounter({
                        ...counter,
                        counter1: counter1 + 1
                    })
                }
            >
                +1 counter1
            </button>
            <button
                className="btn btn-danger m-2"
                onClick={ ()=> setCounter({
                    ...counter,
                    counter1: counter1 - 1 
                }) }
            >
                -1 counter1
            </button>
        </div>
    )
}
