import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const { loading, data } = useFetch('https://www.breakingbadapi.com/api/quotes/1');
  const {author, quote} = (!!data && data.length > 0) && data[0];

  return (
    <div className="container">
        <h1>BreakingBad Quotes</h1>
        <hr/>

        { 
          loading  &&
          <div className="alert alert-info text-center">
              Cargando ...
          </div>
        }

        {
          (!loading && data.length > 0) &&
          <blockquote className="blockquote text-right">
              <p className="mb-0">{ author }</p>
              <footer className="blockquote-footer">{ quote }</footer>
          </blockquote>
        }

        {
          (!loading && !data.length > 0) &&
          <div className="alert alert-warning text-center">
              No se encontro quotes
          </div>
        }

    </div>
  )
}
