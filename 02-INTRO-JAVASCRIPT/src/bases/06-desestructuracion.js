
// DESESTRUCTURACIÓN

const persona = {
    nombre: 'NatalyRM',
    edad: 20,
    clave: 'admin123'
};

// const { nombre, edad } = persona;


// console.log(nombre);


const useContext = ({nombre, edad }) =>{
    return{
        nombreClave: nombre,
        anios: edad,
        coloresFav: {
            primero: 'green',
            segundo: 'blue'
        }
    }
}


const person = useContext(persona);
const {nombreClave, anios, coloresFav :{primero, segundo} } = person;
console.log(nombreClave, anios, primero);
