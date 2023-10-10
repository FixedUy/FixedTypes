"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaDevolucionConverter = void 0;
const VentaDevolucionConverter = {
    toFirestore(ventaDevolucion) {
        return ventaDevolucion;
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
            proveedor: data.proveedor,
            moneda: data.moneda,
            descuentoGeneral: data.descuentoGeneral,
            ventaLinea: data.ventaLinea,
            tipo: data.tipo,
            subtotal: data.subtotal,
            montoIVA: data.montoIVA,
            total: data.total,
            saldo: data.saldo,
            activo: data.activo,
            observaciones: data.observaciones,
            usuario: data.usuario,
            local: data.local,
            buscablePor: data.buscablePor,
            productos: data.productos,
            tipoDevolucion: data.tipoDevolucion,
            detalleDevolucion: data.detalleDevolucion,
            detalleDevolucionImporte: data.detalleDevolucionImporte,
            cotizacion: data.cotizacion
        };
    }
};
exports.VentaDevolucionConverter = VentaDevolucionConverter;
