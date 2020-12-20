import React, { memo } from 'react'

/* MEMO -> Memoriza el valor que recibe por props, si el valor no ha cambiado no es renderizado el componente */

export const Small = memo(({ value }) => {
  console.log('me volvi a llamar')
  return (
    <small>{value}</small>
  )
})
