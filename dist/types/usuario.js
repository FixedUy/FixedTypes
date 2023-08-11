"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioConverter = void 0;
const usuarioConverter = {
    toFirestore(Usuario) {
        return { nombre: Usuario.nombre };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            nombre: data.nombre,
            mail: data.mail,
            creadoEl: data.creadoEl,
            creadoElString: data.creadoElString,
            empresas: data.empresas,
            vendedor: data.vendedor,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.usuarioConverter = usuarioConverter;
