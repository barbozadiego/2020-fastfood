
const modal = document.querySelector('.modal'),
      formIngresar = document.getElementById('ingreso'),
      formRegistro = document.getElementById('registro')


//__________________________________________Horario saludo__________________________________________//

// const now = new Date().toLocaleTimeString()
// const now = new Date().getHours()

// const buenosDia = [1,2,3,4,5,6,7,8,9,10,11],
//       buenasTardes = [12,13,14,15,16,17,18],
//       buenasNoches = [19,20,21,22,23,24]

// let msj

// if(buenosDia.includes(now)) {
//     msj = `Buenos dia`
// } else if (buenasTardes.includes(now)) {
//     msj = `Buenas tardes`
// } else if (buenasNoches.includes(now)) {
//     msj = `Buenas noches`
// }

//__________________________________________Data Base and Login__________________________________________//


// export let dbName='Alejandra', dbUser=1, dbPass=1, infoRegistro = document.createElement('div')
// export let dbName, dbUser, dbPass, infoRegistro = document.createElement('div')
export let dbName = 'Usuari@'
      

//__________________________________________Al enviar formulario de ingreso__________________________________________//


// formIngresar.addEventListener('submit', e => {

//     e.preventDefault()
//     let datoUser = document.getElementById('user').value.toLowerCase()    
//     let datoPass = document.getElementById('pass').value.toLowerCase()

//     if(datoUser == dbUser && dbPass == datoPass ) {
//         document.querySelector('.contenedor-principal').style.display = 'block'
//         modal.style.display = 'none'
//     } else {
//         alert('Datos incorrectos intente nuevamente')
//     }
//     formIngresar.reset()
// })


//__________________________________________Al hacer click en boton de registro__________________________________________//


// document.getElementById('btn-registro').addEventListener('click', () => {
//         formRegistro.style.display = 'block'
//         formIngresar.style.display = 'none'
// })


//__________________________________________Al hacer click en boton de registrarse__________________________________________//


// document.getElementById('btn-registrarse').addEventListener('click', (e) => {
//     e.preventDefault()

//     dbName = document.getElementById('name-reg').value.toUpperCase()
//     dbUser = document.getElementById('user-reg').value.toLowerCase()
//     dbPass = document.getElementById('pass-reg').value.toLowerCase()
    

//     infoRegistro.innerHTML=`<div class='exitoso'>
//                                  <i class="fas fa-user-check"></i> <span>Registro Exitoso</span>
//                            </div>`
    
//     formRegistro.style.display = 'none'

//     //Imprimimos en el DOM
//     modal.appendChild(infoRegistro)

//     //Mostramos por 2 seg el registro exitoso
//     setTimeout(() => {
//         modal.removeChild(infoRegistro)
//         formIngresar.style.display = 'block'
//     }, 2000)

    
//     const welcome = document.getElementById('welcome')
//     let welcomeInfo = document.createElement('div')
//         welcome.className = 'welcome-info'
//         welcomeInfo.innerHTML= `<span>
//         ${msj}  👤 <strong>${dbName}</strong> bienvenido a nuestra plataforma
//                               </span>`
    
//     //Imprimimos en el DOM
//      welcome.appendChild(welcomeInfo)
// })