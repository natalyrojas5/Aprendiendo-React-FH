import React from 'react';
import '@testing-library/jest-dom';
import { shallow} from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', ()=>{
    let wrapper = shallow( <CounterApp />);

    /* 
        Vuelve a inicilizar los valores que tenia el componente <CounterApp />
        cada vez que se ejecute un test()
    */
    beforeEach(()=>{
        wrapper = shallow( <CounterApp />);
    })

    test('Debe de mostrar <CounterApp /> correctamente', ()=>{
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe mostrar el valor por defecto 100', ()=>{
        const valor = 100;
        const wrapper = shallow(<CounterApp value={valor}/>);

        const value = wrapper.find('#counter').text();
        expect(value).toBe('100');
    });

    test('Debe incrementar en +1', ()=>{
        /* 
            at(posicion)
            <button>+1</button> ----> at(0)
            <button>reset</button> ----> at(1)
            <button>-1</button> -------> at(2)
        */
    
        wrapper.find('button').at(0).simulate('click');
        const value = wrapper.find('#counter').text();
        expect(value).toBe('11')
    });

    test('Debe disminuir en -1', ()=>{
        wrapper.find('button').at(2).simulate('click');
        const value = wrapper.find('#counter').text();
        
        expect(value).toBe('9');
    })
})