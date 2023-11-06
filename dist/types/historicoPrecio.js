"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historicoPrecioConverter = void 0;
const historicoPrecioConverter = {
    toFirestore(historicoPrecio) {
        return historicoPrecio;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            idProducto: data.idProducto,
            idLista: data.idLista,
            fechaNumero: data.fechaNumero,
            fechaString: data.fechaString,
            moneda: data.moneda,
            precioSinIVA: data.precioSinIVA,
            precioConIVA: data.precioConIVA,
            tasaIVA: data.tasaIVA,
            arbitrario: data.arbitrario,
            idUsuario: data.idUsuario,
            origenCambio: data.origenCambio,
            idEmpresa: data.idEmpresa
        };
    }
};
exports.historicoPrecioConverter = historicoPrecioConverter;
