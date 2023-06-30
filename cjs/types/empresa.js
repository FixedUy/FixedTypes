"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresaConverter = exports.Empresa = void 0;
class Empresa {
    constructor(id, nombreComercial, rut, razonSocial, logoURL) {
        this.id = id;
        this.nombreComercial = nombreComercial;
        this.rut = rut;
        this.razonSocial = razonSocial;
        this.logoURL = logoURL;
    }
}
exports.Empresa = Empresa;
const empresaConverter = {
    toFirestore(empresa) {
        return { nombreComercial: empresa.nombreComercial };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new Empresa(data.id, data.nombreComercial, data.rut, data.razonSocial, data.logoURL);
    },
};
exports.empresaConverter = empresaConverter;
