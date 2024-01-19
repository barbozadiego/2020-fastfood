import UI from '/scripts/interfaz.js'
import {dbName} from '/scripts/datauser.js'


const ui = new UI()
export let carrito = []
let totalPagar, listaProductos, elementoDuplicado, elementTotal = document.createElement('div')



//__________________________________________Al hacer click en los Span de Añadir al Carrito__________________________________________//


// Detectar producto seleccionado y añadir al carrito
document.querySelectorAll('.productos span').forEach( el => {
el.addEventListener('click', (e) => {
 
    // Detectamos el producto seleccionado y mostramos un preloader al usuario
    let elementFather = e.target.parentElement,
        elementChild = elementFather.firstElementChild,
        loader = elementChild.firstElementChild.nextElementSibling,
        check = elementChild.lastElementChild
        ui.loader(loader)

    // Detectamos el código del producto seleccionado y mostramos un check arrow     
    let codProduct = e.target.id  
        ui.addProduct(codProduct,check)

    let infoCompra = document.querySelector('.info-compra')
    if(infoCompra) infoCompra.remove() 
    
    procesandoData()

})
}) 



//__________________________________________Al hacer click en el boton actualizar Carrito__________________________________________//


// const updateCart = document.getElementById('update-cart')
// updateCart.addEventListener('click', () => {
//     procesandoData()
//     regresarStore()
// })







//__________________________________________Al hacer click en el icono del Carrito__________________________________________//


const showCart = document.getElementById('show-cart')
showCart.addEventListener('click' , () => {
    
    document.querySelector('.carrito').style.display = 'block'
    document.querySelector('.productos').style.display = 'none'
    document.querySelector('.pagar').style.display = 'flex'
    document.querySelector('.form-pagar').style.display = 'flex'
})


//__________________________________________Al hacer click en el icono de la tienda__________________________________________//


const store = document.getElementById('store')
store.addEventListener('click', () => {

    document.querySelector('.productos').style.display = 'grid'
    document.querySelector('.carrito').style.display = 'none'
    document.querySelector('.pagar').style.display = 'none'
})  


//__________________________________________Al hacer click en el boton de pagar__________________________________________//


const btnPagar = document.getElementById('btn-pagar')
btnPagar.addEventListener('click', e => {
    
    e.preventDefault() 
    const sectionPay = document.getElementById('pagar'),
          factura = document.createElement('div'),
          repetido = document.getElementById('repetido'),
          formPay = document.querySelector('.form-pagar')

    let montoPagar = document.getElementById('monto-pagar').value 
        montoPagar = parseFloat(montoPagar,10)

    //Evitamos que se repita la factura cada vez que se genera
    if(repetido) sectionPay.removeChild(repetido)

    // Creamos una condicional en base al monto a pagar que ingrese el usuario 
    if(montoPagar > totalPagar) {
      let cambio = montoPagar - totalPagar
        factura.innerHTML = `<div class='info-compra'> 
        ✔️ Estimad@ <strong>${dbName}</strong> su pedido ha sido pagado, tiene un cambio de <em>${cambio}$</em>. Aproximadamente en 45 min le sera despachado. 
            Gracias por su compra!
             </div>`
      carrito = []
      procesandoData()
      document.querySelector('.form-pagar').style.display = 'none'  
      formPay.reset()
      cartEmpty()
      regresarStore()

    } else if (montoPagar === totalPagar) {
        factura.innerHTML = `<div class='info-compra'>
        ✔️ Estimad@ <strong>${dbName}</strong> su pedido ha sido pagado, Aproximadamente en 45 min le sera despachado. Gracias por su compra!
            </div>`
      carrito = []
      procesandoData()
      document.querySelector('.form-pagar').style.display = 'none'
      formPay.reset()
      cartEmpty()
      regresarStore()

    } else {
        let faltante = totalPagar - montoPagar
        faltante.toFixed(2)
        factura.innerHTML = `<div class='info-compra'>
        ❌ Estimad@ <strong>${dbName}</strong> no le alcanza para pagar la compra, le faltan <em>${faltante}$</em>. 
            </div>`
    } 
    
    factura.id = 'repetido'

    // Imprimimos en el DOM
    sectionPay.appendChild(factura)


})


//__________________________________________Todas las Funciones__________________________________________//

let mensaje

const regresarStore = () => {

    const volver = document.querySelector('.volver')
    if(volver) {    
       volver.addEventListener('click', () => {
        document.querySelector('.productos').style.display = 'grid'
        document.querySelector('.carrito').style.display = 'none'
        document.querySelector('.pagar').style.display = 'none'
    })
    }
    
}

const cartEmpty = () => {
    if(carrito.length === 0) {
       mensaje = `<div class='total-pagar volver'> Volver a la tienda </div>`
    } else {
       mensaje = `<div class='total-pagar'> Monto total a pagar: <strong>${totalPagar}$ </strong></div>`
    }
    return mensaje
}


const procesandoData = () => {
    
    totalPagar = carrito.reduce( (acc , el) =>  acc + (el.precio * el.cantidad) , 0)

    listaProductos = document.getElementById('carrito')
    elementoDuplicado = document.getElementById('duplicado')
    let element = document.createElement('div')

    // Sumamos la cantidad de productos del carrito del usuario y lo mostramos
    let articulos = carrito.reduce( (acc , el) =>  acc + el.cantidad , 0)
    let cantidadArticulos = `<div class='productCart'>
                                <h2>Tiene (${articulos}) productos en el carrito</h2>
                            </div>`

    // Guardamos en memoria                        
    element.innerHTML += cantidadArticulos

    // creamos un encabezado para los productos del carrito
    let cabecera = `<div class='productList cabecera-cart'>
                        <span class='poster'> <strong>Poster</strong> </span>
                        <span class='codigo'> <strong>Código</strong> </span>
                        <span class='nombre'> <strong>Nombre</strong> </span>
                        <span class='cantidad'> <strong>Unid.</strong>  </span>
                        <span class='subtotal'> <strong>Subtotal</strong> </span>
                  </div>`
    element.innerHTML += cabecera

    // Evitamos que la lista de productos se repita cada vez que agregemos un producto.
    if(elementoDuplicado) listaProductos.removeChild(elementoDuplicado) 
   
    //Recorremos el carrito y devolvemos los productos con sus atributos
    for(let producto of carrito) {
        producto = `<div class='productList'>
                        <span class='poster'><img src='${producto.poster}'></span>
                        <span class='codigo'>${producto.cod}</span>
                        <span class='nombre'>${producto.nombre}</span>
                        <span class='cantidad'>
                            <div class='box-precio'> 
                                <span class='decremento'>-</span> <span class='unidades'>${producto.cantidad}</span> <span class='incremento'>+</span> 
                            </div>  
                        </span>
                        <span class='subtotal'>${producto.precio * producto.cantidad}$</span>
                        <span class='delete far fa-trash-alt'></span>
                    </div>`
    element.innerHTML += producto
    }

    elementTotal.innerHTML = cartEmpty()
    
    // Evitamos que se repitan los elementos cada vez que lo actualizemos
    elementTotal.id = 'elementTotalDuplicado'
    element.id = 'duplicado'

    // Imprimimos en el DOM
    listaProductos.appendChild(element)
    listaProductos.appendChild(elementTotal)



    // Dectectamos el producto seleccionado y lo eliminamos
    element.querySelectorAll('.delete').forEach(el => {
    el.addEventListener('click', (e) => {

        let selectElement = e.target
            ui.deleteProduct(selectElement)
        
        // Asignamos el valor de el span que contiene el codigo del producto
        let producto = selectElement.parentElement.querySelector('.codigo').textContent 
        
        let borrarSeleccion = carrito.find(el => el.cod === producto)
        let i = carrito.indexOf(borrarSeleccion)
        carrito.splice(i, 1)  // Borramos el producto seleccionado  
        
        procesandoData()
        regresarStore()
    }) 
    })


    // Disminuimos o Aumentamos productos al hacer click en el simbolo + o -
    document.querySelectorAll('.box-precio span').forEach(el => { 
    el.addEventListener('click', (e) => {
       
        let father = e.target.parentElement.parentElement.parentElement,
        child = father.children[1].textContent,
        productoEncontrado = carrito.find(producto => producto.cod === child),
        modificador = e.target.className
        console.log(child)
        
        if(modificador === 'decremento') {
            if(productoEncontrado.cantidad > 1) productoEncontrado.cantidad--
            procesandoData()
        } else if(modificador === 'incremento') {
            productoEncontrado.cantidad++
            procesandoData()
        }

    }) 
    })
    


}

