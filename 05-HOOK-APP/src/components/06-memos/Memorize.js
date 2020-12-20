import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Counter :<Small value={counter} /></h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={increment}
      >+1</button>

      {/* CADA VEZ QUE SE HACE CLIC EN ESTE BOTON SE RENDERIZA TODO INCLUYENDO EL COMPONENTE <SMALL/> */}
      {/* Para evitar esto usamos el método memo nativo de React en el componente <Small/> para q no se vuelva a renderizar */}
      <button
        className="btn btn-outline-primary ml-2"
        onClick={() => setShow(!show)}
      >
        Show/Hiden {JSON.stringify(show)}
      </button>
    </div>
  )
}
