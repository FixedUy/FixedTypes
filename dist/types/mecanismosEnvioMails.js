"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mecanismosEnvioMailsConverter = void 0;
const mecanismosEnvioMailsConverter = {
    toFirestore(mecanismo) {
        return mecanismo;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            mail: data.mail,
            userId: data.userId,
            mecanismo: data.mecanismo
        };
    }
};
exports.mecanismosEnvioMailsConverter = mecanismosEnvioMailsConverter;
