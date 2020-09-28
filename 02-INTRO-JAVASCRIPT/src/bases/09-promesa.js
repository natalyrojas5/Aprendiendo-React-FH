// import { getHeroesById } from './bases/08-import-export';
import { getHeroesById } from './08-import-export';

// PROMESAS

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const heroe = getHeroesById(id);

            if(heroe){
                resolve( `Mi heroe se llama ${heroe.name}`)
            }else{
                reject('No se encontro el heroe')
            }
            
        }, 2000)
    });
}


getHeroeByIdAsync(3)
    .then(console.log)
    .catch( console.warn);
    






