"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviciosPreciosConverter = void 0;
const serviciosPreciosConverter = {
    toFirestore(lista) {
        return lista;
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
exports.serviciosPreciosConverter = serviciosPreciosConverter;
