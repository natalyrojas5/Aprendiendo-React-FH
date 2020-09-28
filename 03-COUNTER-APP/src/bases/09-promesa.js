import { getHeroesById } from './08-import-export';

// PROMESAS

export const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const heroe = getHeroesById(id);

            if(heroe){
                resolve(heroe.name)
            }else{
                reject('No se encontro el heroe')
            }
            
        }, 1500)
    });
}



    






