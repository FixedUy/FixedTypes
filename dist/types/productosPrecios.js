"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosPreciosConverter = exports.ProductosPrecios = void 0;
class ProductosPrecios {
    constructor(id, nombre, tasa, precioSinIva, precioConIva, moneda, precioArbitrario) {
        this.id = id;
        this.nombre = nombre;
        this.tasa = tasa;
        this.precioSinIva = precioSinIva;
        this.precioConIva = precioConIva;
        this.moneda = moneda;
        this.precioArbitrario = precioArbitrario;
    }
}
exports.ProductosPrecios = ProductosPrecios;
const ProductosPreciosConverter = {
    toFirestore(productosPreciosAux) {
        return {
            id: productosPreciosAux.id,
            nombre: productosPreciosAux.nombre,
            tasa: productosPreciosAux.tasa,
            precioSinIva: productosPreciosAux.precioSinIva,
            precioConIva: productosPreciosAux.precioConIva,
            moneda: productosPreciosAux.moneda,
            precioArbitrario: productosPreciosAux.precioArbitrario
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new ProductosPrecios(data.id, data.nombre, data.tasa, data.precioSinIva, data.precioConIva, data.moneda, data.precioArbitrario);
    }
};
exports.ProductosPreciosConverter = ProductosPreciosConverter;
