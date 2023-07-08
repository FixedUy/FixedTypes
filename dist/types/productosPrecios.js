"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosPreciosConverter = void 0;
const productosPreciosConverter = {
    toFirestore(lista) {
        return {
            idLista: lista.idLista,
            tasa: lista.tasa,
            precioSinIva: lista.precioSinIva,
            precioConIva: lista.precioConIva,
            moneda: lista.moneda,
            precioArbitrario: lista.precioArbitrario
        };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            idLista: data.idLista,
            precioSinIva: data.precioSinIva,
            precioConIva: data.precioConIva,
            moneda: data.moneda,
            tasa: data.tasa,
            precioArbitrario: data.precioArbitrario
        };
    }
};
exports.productosPreciosConverter = productosPreciosConverter;
