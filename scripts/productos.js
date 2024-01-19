
//_________________________________________( Clase productos )___________________________________________________//

export class Productos {
    constructor(nombre,sabor,precio,cod,poster) {
        this.nombre = nombre
        this.sabor = sabor
        this.precio = precio
        this.cod = cod
        this.poster = poster
    }
}

const producto1 = new Productos('Huerfana', 'Sin Papas', 3, 'H100', '/img/p1.jpg' ),
      producto2 = new Productos('Viuda', 'Carne', 5, 'H200', '/img/p2.jpg'),
      producto3 = new Productos('Especial', 'Queso', 6, 'H300', '/img/p3.jpg'),
      producto4 = new Productos('Doubletastic', 'Doble Carne', 9, 'H400', '/img/p4.jpg'),
      producto5 = new Productos('Diabla', 'Picante', 7.5, 'H500', '/img/p5.jpg'),
      producto6 = new Productos('Explosiva', 'Picante', 7.5, 'H600', '/img/p6.jpg'),
      producto7 = new Productos('Coca-Cola', 'Lata', 1.5, 'H700', '/img/p7.jpg'),
      producto8 = new Productos('Pepsi', 'Lata', 1.5, 'H800', '/img/p8.jpg'),
      producto9 = new Productos('Cerveza-Zulia', 'Lata', 2, 'H900', '/img/p9.jpg')

export let productList = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

