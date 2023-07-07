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
            fechaNumero: data.fechaNumero,
            fechaString: data.fechaString,
            comprobante: data.comprobante,
            cliente: data.cliente,
            tipo: data.tipo,
            lineaCompra: data.lineaCompra,
            total: data.total,
            saldo: data.saldo,
            activo: data.activo
        };
    }
};
exports.CompraConverter = CompraConverter;
