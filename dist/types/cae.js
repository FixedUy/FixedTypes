"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAEConverter = void 0;
const CAEConverter = {
    toFirestore(cae) {
        return cae;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            fechaCreacion: data.fechaCreacion,
            ruce: data.ruce,
            tcfe: data.tcfe,
            serie: data.serie,
            desdeNumero: data.desdeNumero,
            hastaNumero: data.hastaNumero,
            numeroAutorizacion: data.numeroAutorizacion,
            fechaAutorizacion: data.fechaAutorizacion,
            fechaVencimiento: data.fechaVencimiento,
            caeEspecial: data.caeEspecial,
            usuarioCreador: data.usuarioCreador,
            xml: data.xml,
            ultimoUsado: data.ultimoUsado
        };
    }
};
exports.CAEConverter = CAEConverter;
