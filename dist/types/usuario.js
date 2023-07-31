"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioConverter = void 0;
const usuarioConverter = {
    toFirestore(Usuario) {
        return { nombre: Usuario.nombre };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const empresas = [];
        if (data.empresas != undefined &&
            data.empresas != null &&
            Array.isArray(data.empresas)) {
            data.empresas.map(e => {
                empresas.push({
                    id: e["id"],
                    nombreComercial: e["nombreComercial"],
                    rut: e["rut"],
                    razonSocial: e["razonSocial"],
                    logoURL: e["logoURL"],
                    opcionesGenerales: null
                });
            });
        }
        return {
            id: snapshot.id,
            nombre: data.nombre,
            mail: data.mail,
            creadoEl: data.creadoEl,
            creadoElString: data.creadoElString,
            empresas: empresas,
            vendedor: data.vendedor,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.usuarioConverter = usuarioConverter;
