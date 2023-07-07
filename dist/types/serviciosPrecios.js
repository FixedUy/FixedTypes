"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosPreciosConverter = exports.ServiciosPrecios = void 0;
class ServiciosPrecios {
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
exports.ServiciosPrecios = ServiciosPrecios;
const ServiciosPreciosConverter = {
    toFirestore(serviciosPreciosAux) {
        return {
            id: serviciosPreciosAux.id,
            nombre: serviciosPreciosAux.nombre,
            tasa: serviciosPreciosAux.tasa,
            precioSinIva: serviciosPreciosAux.precioSinIva,
            precioConIva: serviciosPreciosAux.precioConIva,
            moneda: serviciosPreciosAux.moneda,
            precioArbitrario: serviciosPreciosAux.precioArbitrario
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new ServiciosPrecios(data.id, data.nombre, data.tasa, data.precioSinIva, data.precioConIva, data.moneda, data.precioArbitrario);
    }
};
exports.ServiciosPreciosConverter = ServiciosPreciosConverter;
