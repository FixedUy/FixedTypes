"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviciosRubroConverter = void 0;
const serviciosRubroConverter = {
    toFirestore(servicioRubros) {
        return servicioRubros;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            codigo: data.codigo,
            nombre: data.nombre,
            padreId: data.padreId,
            nombreCompleto: data.nombreCompleto,
            activo: data.activo,
            esHoja: data.esHoja,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.serviciosRubroConverter = serviciosRubroConverter;
