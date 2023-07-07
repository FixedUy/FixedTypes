"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
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
            const diaNumber = fecha.getDate();
            let dia = "";
            if (diaNumber < 10) {
                dia = "0" + diaNumber;
            }
            else {
                dia = diaNumber.toString();
            }
            const mesNumber = fecha.getMonth() + 1;
            let mes = "";
            if (mesNumber < 10) {
                mes = "0" + mesNumber;
            }
            else {
                mes = mesNumber.toString();
            }
            const horaNumber = fecha.getHours() + 1;
            let hora = "";
            if (horaNumber < 10) {
                hora = "0" + horaNumber;
            }
            else {
                hora = horaNumber.toString();
            }
            const minutoNumber = fecha.getMinutes() + 1;
            let minuto = "";
            if (minutoNumber < 10) {
                minuto = "0" + minutoNumber;
            }
            else {
                minuto = minutoNumber.toString();
            }
            // eslint-disable-next-line max-len
            this.creadoElString = `${dia}/${mes}/${fecha.getFullYear()} ${hora}:${minuto}`;
        }
        else {
            this.creadoElString = "";
        }
    }
}
exports.Usuario = Usuario;