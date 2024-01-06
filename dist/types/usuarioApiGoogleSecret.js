"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioApiGoogleSecretConverter = void 0;
const usuarioApiGoogleSecretConverter = {
    toFirestore(usuarioApiGoogleSecretConverter) {
        return usuarioApiGoogleSecretConverter;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            access_token: data.access_token,
            expiry_date: data.expiry_date,
            scope: data.scope,
            id_token: data.id_token,
            refresh_token: data.refresh_token,
            token_type: data.token_type
        };
    }
};
exports.usuarioApiGoogleSecretConverter = usuarioApiGoogleSecretConverter;
