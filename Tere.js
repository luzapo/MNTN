`use strict`
function consulDatos() {
    fetch("./objetos/objet.json")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("no response");
            }
            console.log(respuesta)
            return respuesta.json();
        })
        .then(data => {
            const seleccionarListaProd = document.querySelector("#listaProductos")
            console.log(data)
            for (let i = 0; i < data.tarjetas.length; i++) {
                const crearDoc = document.createElement("div")
                crearDoc.classList.add("contproductos")
                const crearImag = document.createElement("img")
                crearImag.classList.add("fragancias")
                crearImag.src = (data.tarjetas[i].imagen)
                console.log(data.tarjetas[i].imagen)
                console.log(crearImag)
                crearDoc.innerHTML = `
                <span class="uno">${data.tarjetas[i].titulo}</span>
                `
                crearDoc.appendChild(crearImag)
                seleccionarListaProd.appendChild(crearDoc)
            }


        })
        .catch(error => {
            console.error(error, "errorrrrr");
        });


}

consulDatos();