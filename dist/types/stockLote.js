"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockLoteConverter = void 0;
const stockLoteConverter = {
    toFirestore(stockLote) {
        return stockLote;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            cantidadActual: data.cantidadActual,
            cantidadOriginal: data.cantidadOriginal,
            costo: data.costo,
            cotización: data.cotización,
            documentoCreador: data.documentoCreador,
            documentoCreadorId: data.documentoCreadorId,
            fechaCreacion: data.fechaCreacion,
            fechaCreacionString: data.fechaCreacionString,
            localId: data.localId,
            moneda: data.moneda,
            tasaIVA: data.tasaIVA,
            tieneStock: data.tieneStock,
            usuario: data.usuario
        };
    }
};
exports.stockLoteConverter = stockLoteConverter;
