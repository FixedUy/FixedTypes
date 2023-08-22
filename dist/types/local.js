"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localConverter = void 0;
const localConverter = {
    toFirestore(local) {
        return local;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            nombreComercial: data.nombreComercial,
            nombre: data.nombre,
            direccion: data.direccion,
            localidad: data.localidad,
            departamento: data.departamento,
            codigoDgi: data.codigoDgi,
            logo: data.logo,
            logoURL: data.logoURL,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.localConverter = localConverter;
