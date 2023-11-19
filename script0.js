function consultarDatos() {
    fetch('./informacion-json/informacion-about.json').then(respuesta => {
        console.log(respuesta)
    }).catch(error => {
        console.error(error, 'Error :(')
    })
}