import {getSaludo} from '../../bases/02-template-string'

describe('Pruebas en el archivo 02-template-string.js', ()=>{

    test('getSaludo debe retornar un Hola Nataly ', () => {
        const nombre = 'Nataly';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe de retornar Hola Carlos, si no hay argumentos', ()=>{

        const saludo = getSaludo();
        expect(saludo).toBe('Hola ' + 'Carlos');
    })

})