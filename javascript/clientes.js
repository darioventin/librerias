// PAGE: CLIENTES //

// Desestructuración
// const persona = {
//     nombre: prompt("Ingrese nombre"),
//     apellido: prompt("Ingrese apellido"),
//     edad: prompt("Ingrese edad"),
//     domicilio: {
//         calle: prompt("Ingrese calle"),
//         número: prompt("Ingrese numeración"),
//         barrio: prompt("Ingrese barrio"),
//         localidad: prompt("Ingrese localidad"),
//         provincia: prompt("Ingrese provincia"),
//     },
//     DNI: prompt("Ingrese dni"),
//     profesion: prompt("Ingrese profesión"),
// }


// const desestructurar = ({nombre, edad, domicilio}) => {
//     console.log(nombre)
//     console.log(edad)
//     console.log(domicilio.provincia)
// }

// desestructurar(persona)


Swal.fire({
    title: 'Ingrese su email',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Ingresar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      })
    }
  })





// Validar email
// const validateEmail = (email) => {
//     if (email.indexOf(' ') !== -1) {
//         return false;
//     }
//     let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return emailRegex.test(email);
// }


// let altaUsuario = document.getElementById ("formularioClientes");

// altaUsuario. addEventListener ("submit", validarFormulario );

// function validarFormulario (e){
//  e.preventDefault ();
//  console.log("Formulario Enviado "); 
// }


// //* JSON */

// /* Storage */

// const usuario = "usuario"

// sessionStorage.setItem(usuario,"Bienvenido: nombre")

// let storage = sessionStorage.getItem('usuario')
// console.log(storage)

// let container = document.getElementById("contenedor");
// let element = document.createElement("h3")
// element.textContent = storage
// container.append(element)


// //let button = document.createElement("button")
// //button.onclick=()=>{
// //    sessionStorage.clear()
// //}
// //button.textContent = "Eliminar datos"
// //container.append(button)