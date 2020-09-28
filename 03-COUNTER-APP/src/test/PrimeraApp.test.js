import React from 'react';
import { render } from '@testing-library/react';

import PrimeraApp from '../PrimeraApp'

describe('Pruebas en <PrimeraApp />', ()=>{
    test('Debe de mostrar el mensaje "Hola Mundo"', ()=>{
        const saludo = 'Hola Mundo';
        const wrapper = render(<PrimeraApp saludo={saludo}/>);
        // const {getByText} = render(<PrimeraApp saludo={saludo}/>);

        /* 
            getByText() es una fn que busca dentro de un componente el texto pasado por parametro
            componente.getByText('Hola') -> Busca el texto "Hola" en el componente

            toBeInTheDocument() -> Evalua si existe el texto
        */

        expect(wrapper.getByText('Hola Mundo')).toBeInTheDocument();
        // expect(getByText('Hola Mundo')).toBeInTheDocument();
    })
})