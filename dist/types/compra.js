"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraConverter = void 0;
const CompraConverter = {
    toFirestore(compra) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            formaDePago: data.formaDePago,
            fechaComprobante: data.fechaComprobante,
            fechaString: data.fechaString,
            fechaEmision: data.fechaEmision,
            comprobante: data.comprobante,
            proveedor: data.cliente,
            moneda: data.moneda,
            descuentoGeneral: data.descuentoGeneral,
            lineaCompra: data.lineaCompra,
            tipo: data.tipo,
            subtotal: data.subtotal,
            montoIVA: data.montoIVA,
            total: data.total,
            saldo: data.saldo,
            activo: data.activo
        };
    }
};
exports.CompraConverter = CompraConverter;
