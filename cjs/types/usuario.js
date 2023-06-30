"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioConverter = exports.Usuario = void 0;
const empresa_1 = require("./empresa");
const lodash_1 = require("lodash");
class Usuario {
    constructor(id, nombre, mail, creadoEl, empresas, vendedor, activo, ultimaEdicion) {
        this.id = id;
        this.nombre = nombre;
        this.mail = mail;
        this.creadoEl = creadoEl;
        this.empresas = empresas;
        this.vendedor = vendedor;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
        if (creadoEl != null) {
            const fecha = new Date(creadoEl);
            let diaNumber = fecha.getDate();
            let dia = "";
            if (diaNumber < 10) {
                dia = "0" + diaNumber;
            }
            else {
                dia = diaNumber.toString();
            }
            let mesNumber = fecha.getMonth() + 1;
            let mes = "";
            if (mesNumber < 10) {
                mes = "0" + mesNumber;
            }
            else {
                mes = mesNumber.toString();
            }
            let horaNumber = fecha.getHours() + 1;
            let hora = "";
            if (horaNumber < 10) {
                hora = "0" + horaNumber;
            }
            else {
                hora = horaNumber.toString();
            }
            let minutoNumber = fecha.getMinutes() + 1;
            let minuto = "";
            if (minutoNumber < 10) {
                minuto = "0" + minutoNumber;
            }
            else {
                minuto = minutoNumber.toString();
            }
            this.creadoElString = `${dia}/${mes}/${fecha.getFullYear()} ${hora}:${minuto}`;
        }
        else {
            this.creadoElString = "";
        }
    }
}
exports.Usuario = Usuario;
class CustomQueryDocumentSnapshot {
    constructor(snapshot) {
        this.snapshot = snapshot;
    }
    get id() {
        return this.snapshot.id;
    }
    get ref() {
        return this.snapshot.ref;
    }
    get exists() {
        return this.snapshot.exists;
    }
    get customMetadata() {
        return {
            hasPendingWrites: false,
            fromCache: false,
            isEqual: () => false,
        };
    }
    // Getter for the data property
    get customData() {
        return this.snapshot.data();
    }
}
const usuarioConverter = {
    toFirestore(Usuario) {
        return { nombre: Usuario.nombre };
    },
    fromFirestore(snapshot) {
        const data = snapshot.customData;
        const empresas = [];
        if (data.empresas != undefined &&
            data.empresas != null &&
            (0, lodash_1.isArray)(data.empresas)) {
            data.empresas.map((e) => {
                empresas.push(new empresa_1.Empresa(e["id"], e["nombreComercial"], e["rut"], e["razonSocial"], e["logoURL"]));
            });
        }
        return new Usuario(snapshot.id, data.nombre, data.mail, data.creadoEl, empresas, data.vendedor, data.activo, data.ultimaEdicion);
    },
};
exports.usuarioConverter = usuarioConverter;
