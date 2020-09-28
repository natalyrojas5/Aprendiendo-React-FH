import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-useFetch/MultipleCustomHooks';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const showFocus = (show) => {
    setShow(show);
  }
  return (
    <div className="container">
      {
        show &&

        <MultipleCustomHooks />
      }
      <button
        className="btn btn-warning"
        onClick={() => showFocus(!show)}
      >Show / Hide</button>
    </div>
  )
}
