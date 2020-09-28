
export const retornaArreglos = () =>{
    return ['ABCD', 123]
}

const [letras, numeros] = retornaArreglos()

const useState = (valor) =>{
    return[ valor, ()=> { console.log( `Hola ${valor}`)}];
}








