class CarritoCompra {
    constructor() {
        this.productos = []
    }

    agregarProducto(producto) {
        this.productos.push(producto)
    }

    calcularTotal() {
        let sumaTotal = 0
        this.productos.forEach( (producto) =>  { sumaTotal += producto.precio })
        return sumaTotal
    }

    aplicarDescuento(porcentaje) { // 15%
        // this.calcularTotal(); // 10.000
        // this.calcularTotal() * porcentaje / 100; // 10.000 * 15 / 100 = 1.500
        // this.calcularTotal() - this.calcularTotal() * porcentaje / 100; // 10.000 - 1.500 = 8.500

        return this.calcularTotal() - (this.calcularTotal() * porcentaje) / 100
    }
}

module.exports = CarritoCompra
