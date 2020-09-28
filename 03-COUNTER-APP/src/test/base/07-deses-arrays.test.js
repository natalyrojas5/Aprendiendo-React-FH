import '@testing-library/jest-dom';
import {retornaArreglos} from '../../bases//07-deses-arrays'

describe('Pruebas en el archivo 07-deses-arrays.js', ()=>{
    test('retornaArreglos debe retornar un array', ()=>{
        // const arr = ['ABCD', 123];
        const [letras, numeros] = retornaArreglos();

        expect(letras).toBe('ABCD');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);

    })
})