"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresaConverter = void 0;
const empresaConverter = {
    toFirestore(empresa) {
        return { nombreComercial: empresa.nombreComercial };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: data.id,
            nombreComercial: data.nombreComercial,
            rut: data.rut,
            razonSocial: data.razonSocial,
            logoURL: data.logoURL
        };
    }
};
exports.empresaConverter = empresaConverter;
