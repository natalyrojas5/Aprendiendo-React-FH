// FETCH API

export const getImages = async() =>{

    try{
        const apiKey = 'Z33vHvisIfwU7cQnRFcfPLxeswnZRun1';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const { url } = data.images.original; 
        
        return url;

    }catch(error){
        return 'No existe'
    }
}


