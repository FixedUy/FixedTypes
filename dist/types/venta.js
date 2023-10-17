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
            ventaLinea: data.ventaLinea,
            subtotal: data.subtotal,
            montoIVA: data.montoIVA,
            redondeo: data.redondeo,
            total: data.total,
            saldo: data.saldo,
            activo: data.activo,
            observaciones: data.observaciones,
            esDeExportacion: data.esDeExportacion,
            clausulaVenta: data.clausulaVenta,
            modalidadVenta: data.modalidadVenta,
            viaTransporte: data.viaTransporte,
            usuario: data.usuario,
            local: data.local,
            listasPreciosServicios: data.listasPreciosServicios,
            listasPreciosProductos: data.listasPreciosProductos,
            buscablePor: data.buscablePor,
            cotizacion: data.cotizacion,
            productos: data.productos,
            tipo: data.tipo,
            esDeReintegro: data.esDeReintegro,
            periodoDesdeHasta: data.periodoDesdeHasta,
            ordenCompra: data.ordenCompra
        };
    }
};
exports.VentaConverter = VentaConverter;
