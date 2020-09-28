import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = (!!data && data.length > 0) && data[0];

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>BreakingBad Quotes</h1>
        <h3>Quote Nro: {counter}</h3>
      </div>
      <hr />

      {
        loading &&
        <div className="alert alert-info text-center">
          Cargando ...
          </div>
      }

      {
        (!loading && !data.length < 0) &&
        <div className="alert alert-warning text-center">
          No se encontro quotes
          </div>
      }

      {
        (!loading && data.length > 0) &&
        <div className="text-right">
          <blockquote className="blockquote">
            <p className="mb-0">{author}</p>
            <footer className="blockquote-footer">{quote}</footer>
          </blockquote>
          <button
            className="btn btn-primary"
            onClick={increment}
          >Siguiente blockquote</button>
        </div>
      }
    </div>
  )
}
