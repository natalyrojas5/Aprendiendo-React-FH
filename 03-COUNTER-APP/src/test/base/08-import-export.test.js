import {getHeroesById, getHeroesByOwner} from '../../bases/08-import-export';  
import heroes from '../../data/heroes';    

describe('Pruebas en el archivo 08-import-export.js', ()=>{
    test('Debe retornar un  héroe por id', ()=>{
        const id = 5;
        const getHeroes = getHeroesById(id);
        const heroData = heroes.find(heroe => heroe.id === 5)

        expect(getHeroes).toEqual(heroData);
    });

    test('Debe retornar undefined si no existe id de héroe', ()=>{
        const id = 55;
        const getHeroes = getHeroesById(id);

        expect(getHeroes).toBe(undefined);
    });

    /*
        Test 3:
        
        Retornar un  arreglo con los héroes de DC
        toEqual  al arreglo filtrado
    */
    test('Retornar un  arreglo con los héroes de DC', ()=>{
        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner(owner);
        const heroesDC = heroes.filter(heroe => heroe.owner === owner);

        expect(heroesByOwner).toEqual(heroesDC);
    });

    /*
        Test 4:

        Retornar retornar un arreglo con los héroes de Marvel
        length =  2 - toBe
    */
    test('Retornar retornar un arreglo con los héroes de Marvel y validad que sean 2 elem', ()=>{
        const ownerMarvel = 'Marvel';
        const heroesByOwnerMarvel = getHeroesByOwner(ownerMarvel);

        expect(heroesByOwnerMarvel.length).toBe(2);

    });

})