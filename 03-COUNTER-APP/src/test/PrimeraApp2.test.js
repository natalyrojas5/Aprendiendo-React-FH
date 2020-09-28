import React from 'react';
import '@testing-library/jest-dom';
import { shallow} from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', ()=>{
    test('Debe de mostrar <PrimerApp /> correctamente"', ()=>{
        const saludo = 'Hola Mundo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar un subtitulo', ()=>{
        const saludo = 'Hola Mundo';
        const subtitulo = 'Hola soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subtitulo}
            />
        );
        // find() = document.querySelector()
        const parrafo = wrapper.find('p').text();

        expect(parrafo).toBe(subtitulo);
    })
})