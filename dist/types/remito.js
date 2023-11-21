"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemitoConverter = exports.RemitoTipo = void 0;
var RemitoTipo;
(function (RemitoTipo) {
    RemitoTipo["Ingreso"] = "ingreso";
    RemitoTipo["Salida"] = "salida";
    RemitoTipo["Transferencia"] = "transferencia";
})(RemitoTipo = exports.RemitoTipo || (exports.RemitoTipo = {}));
const RemitoConverter = {
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
            comprobante: data.comprobante,
            numero: data.numero,
            localIngresa: data.localIngresa,
            localSale: data.localSale,
            entidadId: data.entidadId,
            entidadNombre: data.entidadNombre,
            items: data.items,
            observaciones: data.observaciones,
            tipo: data.tipo,
            autor: data.autor,
            activo: data.activo,
            cfe: data.cfe
        };
    }
};
exports.RemitoConverter = RemitoConverter;
