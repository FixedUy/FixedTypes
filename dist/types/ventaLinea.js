"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaLineaConverter = void 0;
const VentaLineaConverter = {
    toFirestore(linea) {
        return linea;
    },
    fromFirestore(snapshot) {
        var _a;
        const data = snapshot.data();
        return {
            cantidad: data.cantidad,
            descripcion: data.descripcion,
            descripcionLarga: data.descripcionLarga,
            rubro: data.rubro,
            centroCosto: data.centroCosto,
            tipo: data.tipo,
            tasaIva: data.tasaIva,
            montoBruto: data.montoBruto,
            descuentoMonto: data.descuentoMonto,
            descuentoPorcentaje: data.descuentoPorcentaje,
            precio: data.precio,
            importe: data.importe,
            stockProducto: (_a = data.stockProducto) !== null && _a !== void 0 ? _a : null,
            idProducto: data.idProducto,
            idServicio: data.idServicio,
            listaPrecio: data.listaPrecio,
            retenciones: data.retenciones
        };
    }
};
exports.VentaLineaConverter = VentaLineaConverter;
