import {carrito} from '/scripts/index.js'
import {productList} from '/scripts/productos.js'



export default class UI  {

    addProduct(codigo,check) {
        let productoEncontrado = productList.find(producto => producto.cod === codigo)
        let productoRepetido = carrito.includes(productList.find(producto => producto.cod === codigo))
    
        if(productoRepetido) {
            productoEncontrado.cantidad++
            this.checkArrow(check)
        } else {
            carrito.push(productoEncontrado)
            productoEncontrado.cantidad = 1
            this.checkArrow(check)
        }
    }

    loader(loader) {
        loader.classList.add('loader')
        setTimeout(() => {
            loader.classList.remove('loader')
        }, 1500 )
    }

    checkArrow(check) {
        setTimeout(() => {
            check.classList.add('fas','fa-check-circle')
            // check.classList.remove('loader')
        }, 1500 )

       if(check.classList = 'fas', 'fa-check-circle') {
         setTimeout(() => {
            check.classList.remove('fas', 'fa-check-circle') 
         }, 3000);
      }
    
    }

    deleteProduct(element) {
            element.parentElement.remove()
    }


}









