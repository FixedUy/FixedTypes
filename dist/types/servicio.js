"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicioConverter = void 0;
const servicioConverter = {
    toFirestore(servicio) {
        return servicio;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            codigo: data.codigo,
            nombre: data.nombre,
            rubro: data.rubro,
            listaPrecio: data.listaPrecio,
            unidad: data.unidad,
            activo: data.activo,
            campoExtra: data.campoExtra
        };
    }
};
exports.servicioConverter = servicioConverter;
