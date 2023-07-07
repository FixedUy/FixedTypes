"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasaConverter = void 0;
const tasaConverter = {
    toFirestore(tasa) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            nombre: data.nombre,
            sigla: data.sigla,
            valor: data.valor,
            cfeDgi: data.cfeDgi,
            activoProductos: data.activoProductos,
            activoServicios: data.activoServicios,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.tasaConverter = tasaConverter;
