const CarritoCompra = require('../index');

let carrito; 

describe('Carrito de compras', () => {

    let producto1 = { nombre: 'Smart TV', precio: 7000 }
    let producto2 = { nombre: 'Iphone 15', precio: 3000 }
    
    // const mockAddProduct = jest.fn(carrito.agregarProducto)
    
    beforeEach(() => {
        carrito = new CarritoCompra();
    })

    it('Deberia existir la clase carrito de compra', () => {
        expect(typeof CarritoCompra).toBe('function')
    })
    
    it('Deberia existir un constructor en carrito de compra', () => {
        expect(typeof carrito.constructor).toBe('function')
    })
    
    it('Validamos el array de productos', () => {
        expect(carrito.productos).toEqual([])
        expect(Array.isArray(carrito.productos)).toBe(true)
    })

    it('Deberia tener un metodo agregarProducto', () => {
        expect(typeof carrito.agregarProducto).toBe('function')
    })

    it('Debe agregar un producto al carrito', () => {
        expect(carrito.productos.length).toBe(0);
        carrito.agregarProducto(producto1);
        expect(carrito.productos.length).toBe(1)
    })

    it('Deberia tener un metodo calcularTotal', () => {
        expect(typeof carrito.calcularTotal).toBe('function')
    })

    it('Debe calcular el monto total de la compra', () => {
        carrito.agregarProducto(producto2);
        carrito.agregarProducto(producto1);
        expect(carrito.calcularTotal()).toBe(producto1.precio + producto2.precio);
    })

    it('Deberia tener un metodo aplicarDescuento', () => {
        expect(typeof carrito.aplicarDescuento).toBe('function')
    })
    
    it('Debe aplicar el descuento al total de la compra', () => {
        carrito.agregarProducto(producto2);
        carrito.agregarProducto(producto1);
        expect(carrito.aplicarDescuento(15)).toBe(8500);
    })

})
