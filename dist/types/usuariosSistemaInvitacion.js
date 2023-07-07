"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioSistemaInvitacionConverter = void 0;
const usuarioSistemaInvitacionConverter = {
    toFirestore(Usuario) {
        return { nombre: Usuario.nombre };
    },
    fromFirestore(snapshot) {
        var _a;
        const data = snapshot.data();
        return {
            id: snapshot.id,
            mail: data.mail,
            nombre: data.nombre,
            vendedor: data.vendedor,
            enviadaPorNombre: data.enviadaPorNombre,
            enviadaPorMail: data.enviadaPorMail,
            enviadaEl: (_a = data.enviadaEl) === null || _a === void 0 ? void 0 : _a.seconds,
            enviadaElString: data.enviadaElString
        };
    }
};
exports.usuarioSistemaInvitacionConverter = usuarioSistemaInvitacionConverter;
