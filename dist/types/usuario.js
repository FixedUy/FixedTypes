"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioConverter = void 0;
/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
const empresa_1 = require("./empresa");
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
            data.empresas.map((e) => {
                empresas.push(new empresa_1.Empresa(e["id"], e["nombreComercial"], e["rut"], e["razonSocial"], e["logoURL"]));
            });
        }
        return {
            id: snapshot.id,
            nombre: data.nombre,
            mail: data.mail,
            creadoEl: data.creadoEl,
            creadoElString: data.nombre,
            empresas: empresas,
            vendedor: data.vendedor,
            activo: data.activo,
            ultimaEdicion: data.creadoEl
        };
        // snapshot.id,
        // data.nombre,
        // data.mail,
        // data.creadoEl,
        // empresas,
        // data.vendedor,
        // data.activo,
        // data.ultimaEdicion
    }
};
exports.usuarioConverter = usuarioConverter;
