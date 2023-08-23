"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedorConverter = void 0;
const proveedorConverter = {
    toFirestore(proveedor) {
        return proveedor;
    },
    fromFirestore(snapshot) {
        var _a, _b;
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
            rubroId: data.rubroId,
            listaPrecioServicios: data.listaPrecioServicios,
            formaDePago: data.formaDePago,
            esProveedor: data.esProveedor,
            esCliente: data.esCliente,
            activo: data.activo,
            campoExtra: (_a = data.campoExtra) !== null && _a !== void 0 ? _a : {},
            saldoCuentas: (_b = data.saldoCuentas) !== null && _b !== void 0 ? _b : {}
        };
    }
};
exports.proveedorConverter = proveedorConverter;
