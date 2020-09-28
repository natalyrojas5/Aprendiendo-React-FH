import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputNombre = useRef(null);

  const handlerfocus = () => {
    inputNombre.current.select();
  }

  return (
    <div className="container">
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputNombre}
        className="form-control"
        placeholder="Su nombre"
      />

      <button
        onClick={handlerfocus}
        className="btn btn-outline-primary btn-block mt-3">
        Focus
      </button>
    </div>
  )
}
