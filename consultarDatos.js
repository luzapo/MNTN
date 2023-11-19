'use strict'

function consultarDatos() {
 
    fetch("./informacion-json/informacion-about.json")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("no response");
            }
            console.log(respuesta)
            return respuesta.json();
        })
        // en dta esta el obj.json
        .then(data => {
            console.log(data); // Verifica si los datos se obtienen correctamente
            const seleccionarValores = document.querySelector('#listaValores') // seleccionarListaProd
                       //#listaProductos      
            console.log(data);
            for (let i = 0; i < data.tarjetas.length; i++) {
                // creando un elemento div
                const crearDoc = document.createElement("div")
                //  crearDoc.classList.add("card-columns")   

                crearDoc.classList.add("card"); // Cambio de clase a "card"

                const crearImag = document.createElement("img")
                crearImag.classList.add("imagenX") 
               // crearImag.src = data.tarjetas[i].imagen;
                console.log(data.tarjetas[i].imagen);
                console.log(crearImag);
                // 
                crearDoc.innerHTML = `
                 <span class="estilotitulo">${data.tarjetas[i].titulo}</span>  
                 <img class="imagenX" src="${data.tarjetas[i].imagen}" alt="Imagen">
                 <span class="estilotexto">${data.tarjetas[i].texto}</span>  
                 <span class="estiloboton">${data.tarjetas[i].boton}</span>  
                `;  

                crearDoc.appendChild(crearImag)
                seleccionarValores.appendChild(crearDoc) 

            }
        })
        .catch(error => {
            console.error(error, "errorrr");
        });
}

consultarDatos();
