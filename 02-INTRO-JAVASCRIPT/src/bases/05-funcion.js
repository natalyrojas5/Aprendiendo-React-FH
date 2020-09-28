
// FUNCIONES

const saludar2 = ( nombre ) =>{
    return `Hola,  ${nombre}`;
} 

const saludar3 = nombre =>  `Hola ${nombre}`;
// const saludar3 = (nombre) =>  `Hola ${nombre}`;

console.log(saludar2('Nataly'));
console.log(saludar3('Mimi'));

const getUser = () =>({
        userId: 'ABCD10',
        username: 'Nataly20'
})

console.log(getUser());

const getUserActive = (nombre) => ({ 
    uid: 'ABC10', 
    username: nombre
}); 

const usuario2 = getUserActive('Mimi20');

console.log(usuario2);
