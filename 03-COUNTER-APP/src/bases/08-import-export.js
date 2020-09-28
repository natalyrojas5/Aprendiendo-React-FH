import heroes from '../data/heroes'
// import heroes, {owner} from '../data/heroes'

// console.log(owner);


export const getHeroesById = (id) => heroes.find(heroe => heroe.id === id);

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner );






