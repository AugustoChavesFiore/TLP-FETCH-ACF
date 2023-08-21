const datos= async()=>{
    const res =await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'GET',    
    })
    const data=await res.json();
    return data;
};

const mostrarDatos= async(datos)=>{
    const data= await datos;
    data.forEach(element => {
        console.log(element);
    });
};

// mostrarDatos(datos())


const enviarDatos= async()=>{
    const res =await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'POST',  
        headers:{'Content-Type': 'application/json' },
        body: JSON.stringify({
            title:"peticion POST",
            body:"Esto es una prueba de peticion POST"
        })
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      
      const responseData = await res.json();
      
      // Muestra los datos de respuesta obtenidos
      console.log(responseData);
};

// enviarDatos()


const datosImg= async()=>{
    const link = `https://via.placeholder.com/150` //problemas con cors
    const res =await fetch(link)
    const blob=await res.blob();
    return blob;
};

document.addEventListener('DOMContentLoaded',async()=>{
    const blob= await datosImg();
    const imagen= document.querySelector('#imagen');
    const  objUrl=URL.createObjectURL(blob);
    imagen.src=objUrl;
});
