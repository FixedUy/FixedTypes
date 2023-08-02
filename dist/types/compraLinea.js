"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraLineaConverter = void 0;
const CompraLineaConverter = {
    toFirestore(linea) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            cantidad: data.cantidad,
            descripcion: data.descripcion,
            rubro: data.rubro,
            incluyeIva: data.incluyeIva,
            tasaIva: data.tasaIva,
            descuentoMonto: data.descuentoMonto,
            descuentoPorcentaje: data.descuentoPorcentaje,
            precio: data.precio,
            importe: data.importe,
            stock: data.stock,
            idProducto: data.idProducto
        };
    }
};
exports.CompraLineaConverter = CompraLineaConverter;
