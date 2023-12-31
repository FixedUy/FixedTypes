"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entidadConverter = void 0;
const entidadConverter = {
    toFirestore(entidad) {
        return entidad;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            tipoDocumento: data.tipoDocumento,
            documento: data.documento,
            razonSocial: data.razonSocial,
            pais: data.pais,
            nombreComercial: data.nombreComercial,
            direccion: data.direccion,
            localidad: data.localidad,
            departamento: data.departamento,
            direccionEntrega: data.direccionEntrega,
            descuento: data.descuento,
            emails: data.emails,
            mailDgi: data.mailDgi,
            mailCopiaXml: data.mailCopiaXml,
            vendedorId: data.vendedorId,
            rubroId: data.rubroId,
            listaPrecioServicios: data.listaPrecioServicios,
            formaDePago: data.formaDePago,
            esProveedor: data.esProveedor,
            esCliente: data.esCliente,
            activo: data.activo,
            campoExtra: data.campoExtra,
            saldoCuentas: data.saldoCuentas
        };
    }
};
exports.entidadConverter = entidadConverter;
