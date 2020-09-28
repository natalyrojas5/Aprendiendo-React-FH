import {getHeroeByIdAsync} from '../../bases/09-promesa.js';  
import heroes from '../../data/heroes';   

describe('Pruebas con promesas', ()=>{

    // el callback done indica cuando debe de terminarse la prueba cuando es una promesa
    test('getHeroeByIdAsync debe retornar un heroe async', (done)=>{
        const id = 2;
        getHeroeByIdAsync(id)
            .then(heroe =>{ 
                expect(heroe).toBe(heroes[1].name);
                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un error si un id no existe', (done)=>{
        const id = 15;
        getHeroeByIdAsync(id)
            .catch(err =>{
                expect(err).toBe('No se encontro el heroe')
                done();
            })
    });
})