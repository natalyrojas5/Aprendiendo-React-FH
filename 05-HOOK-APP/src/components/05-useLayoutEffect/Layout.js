import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css'
export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = (!!data && data.length > 0) && data[0];
  const pTag = useRef();

  const [boxSize, setBoxSize] = useState();

  useLayoutEffect(() => {
    let box = pTag.current.getBoundingClientRect();
    setBoxSize(box);
  }, [quote])


  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Layout Effect</h1>
        <p>Se dispara después de todas las mutaciones del DOM.<br />
          Use esto para leer el diseño del DOM.</p>
        <h3>Quote Nro: {counter}</h3>
      </div>
      <hr />

      <blockquote
        className="text-left blockquote"
      >
        <p
          className="mb-0"
          ref={pTag}>{quote}</p>
      </blockquote>
      <pre className="rect">
        {
          JSON.stringify(boxSize, null, 3)
        }
      </pre>
      <button
        className="btn btn-primary"
        onClick={increment}
      >Siguiente blockquote</button>
    </div>
  )
}
