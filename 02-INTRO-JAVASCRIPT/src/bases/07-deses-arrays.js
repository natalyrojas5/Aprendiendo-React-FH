
// DESESTRUCTURACIÓN DE ARREGLOS

const personajes = ['Mimi', 'Perry', 'Gringa'];

const [pers1, , pers2] = personajes;

console.log(pers1, pers2);

const retornaArreglos = () =>{
    return ['ABCD', 123]
}

const [letras, numeros] = retornaArreglos();
console.log(letras, numeros);


const useState = (valor) =>{
    return[ valor, ()=> { console.log( `Hola ${valor}`)}];
}

const [nombre, setName ] = useState('Mimi')

console.log(nombre);
setName()
;






