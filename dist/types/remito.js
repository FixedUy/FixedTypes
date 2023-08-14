"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remitoConverter = exports.RemitoTipo = void 0;
var RemitoTipo;
(function (RemitoTipo) {
    RemitoTipo["Ingreso"] = "ingreso";
    RemitoTipo["Salida"] = "salida";
    RemitoTipo["Transferencia"] = "transferencia";
})(RemitoTipo || (exports.RemitoTipo = RemitoTipo = {}));
const remitoConverter = {
    toFirestore(remito) {
        return remito;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            fechaComprobante: data.fechaComprobante,
            fechaComprobanteString: data.fechaComprobanteString,
            fechaCreacion: data.fechaCreacion,
            numero: data.numero,
            localIngresa: data.localIngresa,
            localSale: data.localSale,
            entidad: data.entidad,
            items: data.items,
            observaciones: data.observaciones,
            tipo: data.tipo,
            autor: data.autor,
            activo: data.activo
        };
    }
};
exports.remitoConverter = remitoConverter;
