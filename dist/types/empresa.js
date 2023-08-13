"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresaConverter = void 0;
const empresaConverter = {
    toFirestore(empresa) {
        return empresa;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: data.id,
            version: data.version,
            nombreComercial: data.nombreComercial,
            rut: data.rut,
            razonSocial: data.razonSocial,
            logoURL: data.logoURL,
            opcionesGenerales: data.opcionesGenerales,
            opcionesCompras: data.opcionesCompras,
            domicilio: data.domicilio,
            localidad: data.localidad,
            departamento: data.departamento,
            celular: data.celular,
            tieneCedula: data.tieneCedula,
            cedula: data.cedula,
            documentoExtranjero: data.documentoExtranjero,
            primerNombre: data.primerNombre,
            segundoNombre: data.segundoNombre,
            primerApellido: data.primerApellido,
            segundoApellido: data.segundoApellido,
            tieneContador: data.tieneContador,
            contadorNombre: data.contadorNombre,
            contadorMail: data.contadorMail,
            contadorTelefono: data.contadorTelefono
        };
    }
};
exports.empresaConverter = empresaConverter;
