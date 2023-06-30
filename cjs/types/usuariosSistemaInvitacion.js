"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioSistemaInvitacionConverter = exports.UsuarioSistemaInvitacion = void 0;
class UsuarioSistemaInvitacion {
    constructor(id, mail, nombre, vendedor, enviadaPorNombre, enviadaPorMail, fechaTimestamp) {
        this.id = id;
        this.mail = mail;
        this.nombre = nombre;
        this.vendedor = vendedor;
        this.enviadaPorNombre = enviadaPorNombre;
        this.enviadaPorMail = enviadaPorMail;
        if (fechaTimestamp != null) {
            this.enviadaEl = fechaTimestamp;
            const fecha = new Date(fechaTimestamp * 1000);
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
            this.enviadaElString = `${dia}/${mes}/${fecha.getFullYear()} ${hora}:${minuto}`;
        }
        else {
            this.enviadaEl = null;
            this.enviadaElString = "";
        }
    }
}
exports.UsuarioSistemaInvitacion = UsuarioSistemaInvitacion;
const usuarioSistemaInvitacionConverter = {
    toFirestore(Usuario) {
        return { nombre: Usuario.nombre };
    },
    fromFirestore(snapshot) {
        var _a;
        const data = snapshot.data();
        return new UsuarioSistemaInvitacion(snapshot.id, data.mail, data.nombre, data.vendedor, data.enviadaPorNombre, data.enviadaPorMail, (_a = data.enviadaEl) === null || _a === void 0 ? void 0 : _a.seconds);
    },
};
exports.usuarioSistemaInvitacionConverter = usuarioSistemaInvitacionConverter;
