"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioConverter = void 0;
const usuario_1 = require("./usuario");
const empresa_1 = require("./empresa");
exports.usuarioConverter = {
    toFirestore(Usuario) {
        return { nombre: Usuario.nombre };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const empresas = [];
        if (data.empresas != undefined &&
            data.empresas != null &&
            Array.isArray(data.empresas)) {
            data.empresas.map((e) => {
                empresas.push(new empresa_1.Empresa(e["id"], e["nombreComercial"], e["rut"], e["razonSocial"], e["logoURL"]));
            });
        }
        return new usuario_1.Usuario(snapshot.id, data.nombre, data.mail, data.creadoEl, empresas, data.vendedor, data.activo, data.ultimaEdicion);
    }
};
