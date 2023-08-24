"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaConverter = void 0;
const VentaConverter = {
    toFirestore(venta) {
        return venta;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            formaDePago: data.formaDePago,
            fechaComprobante: data.fechaComprobante,
            fechaComprobanteString: data.fechaComprobanteString,
            fechaCreacion: data.fechaCreacion,
            comprobante: data.comprobante,
            serie: data.serie,
            numero: data.numero,
            cliente: data.cliente,
            moneda: data.moneda,
            descuentoGeneral: data.descuentoGeneral,
            compraLinea: data.compraLinea,
            subtotal: data.subtotal,
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
exports.VentaConverter = VentaConverter;