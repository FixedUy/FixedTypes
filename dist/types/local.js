"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localConverter = void 0;
const localConverter = {
    toFirestore(local) {
        return {
            id: local.id,
            nombreComercial: local.nombreComercial,
            nombre: local.nombre,
            direccion: local.direccion,
            localidad: local.localidad,
            departamento: local.departamento,
            codigoDgi: local.codigoDgi,
            logo: local.logo,
            logoURL: local.logoURL,
            activo: local.activo,
            ultimaEdicion: local.ultimaEdicion
        };
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
