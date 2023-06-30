"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localConverter = exports.Local = void 0;
class Local {
    constructor(id, nombreComercial, nombre, direccion, localidad, departamento, codigoDgi, logo, logoURL, activo, ultimaEdicion) {
        this.id = id;
        this.nombreComercial = nombreComercial;
        this.nombre = nombre;
        this.direccion = direccion;
        this.localidad = localidad;
        this.departamento = departamento;
        this.codigoDgi = codigoDgi;
        this.logo = logo;
        this.logoURL = logoURL;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
    }
}
exports.Local = Local;
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
            ultimaEdicion: local.ultimaEdicion,
        };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new Local(snapshot.id, data.nombreComercial, data.nombre, data.direccion, data.localidad, data.departamento, data.codigoDgi, data.logo, data.logoURL, data.activo, data.ultimaEdicion);
    },
};
exports.localConverter = localConverter;
