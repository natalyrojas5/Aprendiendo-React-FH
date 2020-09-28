import '@testing-library/jest-dom';
import {getUser, getUserActive} from '../../bases/05-funciones';

describe('Pruebas en el archivo 05-funciones.js', ()=>{

    test('getUse debe retornar un objeto', () => {
        const userObj = {
            userId: 'ABCD10',
            username: 'Nataly20'
        }

        const user = getUser();

        /*
            expect(user).toBe(userObj);
            --> Dará un error porque no puede comparar un obj (user) con otro (userObje) 
                para saber si tienes las mismas propiedades
                Es como hacer -> {} === {} =  false 

            SOLUCUÓN
            --> Para realizar la comparación de objetos en vez de usar .toBe usarermos .toStrictEqual o .toEqual

        */

        expect(user).toEqual(userObj);

    });

    test('getUserActive  debe retornar un objeto', ()=>{
        const nombre  =  'Nataly';
        const userActiveObj = {
            uid: 'ABC10', 
            username: 'Nataly'
        }

        const userActive = getUserActive(nombre);
        expect(userActive).toEqual(userActiveObj);
    })
    
})