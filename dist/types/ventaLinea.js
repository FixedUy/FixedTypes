"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaLineaConverter = void 0;
const VentaLineaConverter = {
    toFirestore(linea) {
        return linea;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            cantidad: data.cantidad,
            descripcion: data.descripcion,
            rubro: data.rubro,
            centroCosto: data.centroCosto,
            tasaIva: data.tasaIva,
            montoBruto: data.montoBruto,
            descuentoMonto: data.descuentoMonto,
            descuentoPorcentaje: data.descuentoPorcentaje,
            precio: data.precio,
            importe: data.importe,
            stock: data.stock,
            idProducto: data.idProducto
        };
    }
};
exports.VentaLineaConverter = VentaLineaConverter;
