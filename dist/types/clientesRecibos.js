"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesRecibosConverter = void 0;
const ClientesRecibosConverter = {
    toFirestore(recibo) {
        return recibo;
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
            serie: data.serie,
            numero: data.numero,
            cliente: data.cliente,
            moneda: data.moneda,
            facturasAfectadas: data.facturasAfectadas,
            tipo: data.tipo,
            montoIVA: data.montoIVA,
            total: data.total,
            saldo: data.saldo,
            activo: data.activo,
            observaciones: data.observaciones,
            usuario: data.usuario,
            local: data.local
        };
    }
};
exports.ClientesRecibosConverter = ClientesRecibosConverter;
// export type {FacturasAfectadas};
