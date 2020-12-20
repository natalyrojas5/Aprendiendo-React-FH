import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(15);

  /* MEMORIZAR UNA FUNCIÓN -------------------------- */
  /* 
    EL COMPONENTE SE RENDERIZA POR CADA CAMBIO QUE HAYA EN USESTATE.

    PARA EVITAR QUE SE VUELVA A EJECUTAR UNA FUNCION QUE NO HA SIDO MODIFICADA
    USAMOS EL USECALLBACK.

    USECALLBACK, REGRESA UNA FUNCION MEMORIZADA  
  */
  const increment = useCallback(() => {
    setCounter(c => c + 1)
  }, [setCounter])

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  )
}
