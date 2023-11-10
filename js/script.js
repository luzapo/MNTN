class ValidadorFormulario {
    // en constructor recibo un parametro, no importa el nombre
    constructor(idFormulario) {
        console.log(idFormulario)
        this.form = document.getElementById(idFormulario);

        //seleccionar inputs
        this.usuario = document.getElementById('usuario');
        this.clave = document.getElementById('clave');
        this.submit = document.getElementById('submit');


        // Seleccionar span de error
        this.usuarioError = document.getElementById('usuarioError');
        this.claveError = document.getElementById('claveError');
        this.submitError = document.getElementById('submitError');


        //Escuchar los eventos del usuario
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();  // evitar el envío de formulario por defecto

            if (this.validarFormulario()) {
                alert('enviando informacion')
            }
        })

    }

    // método, fuera del constructor y dentro de la clase. 
    //validarFormulario() {
    //}
    validarFormulario() {

        // console.log('ingreso al método')

        // console.log(this.usuario.value, 'esto llega de usUARIOOOOO');
        let valid = true;

        // Validacion del usuario
        if (this.usuario.value === '') {
            this.usuarioError.textContent = 'El nombre del usuario es obligatorio';
            this.usuario.classList.add('error-input');
            valid = false;
        }
        else {
            this.usuarioError.textContent = '';
            this.usuario.classList.remove('error-input');
        }

        // Validacion de la clave
        if (this.clave.value === '') {
            this.claveError.textContent = 'Clave es obligatoria';
            this.clave.classList.add('error-input');
            valid = false;
        }
        else {
            this.claveError.textContent = '';
            this.clave.classList.remove('error-input');
        }

        if (this.usuario.value !== '' && this.clave.value !== '') {
           alert('Informacion Correcta');
        }
        // return valid;
    }


    // Segundo método
    //    validarCorreo(mail) {
    //        const email = /\S+@\S+\.\S+/
    //        return email
    //    }


}