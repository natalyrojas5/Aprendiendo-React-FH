import {getImages} from '../../bases/11-async-await';

describe('Pruebas con async await y fetch', ()=>{
    test('getImages debe retornar la url de la imagen ', async() => {
        const url = await getImages();

        expect(url.includes('https')).toBe(true);
    })
    
})