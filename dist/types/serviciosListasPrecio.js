"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviciosListasPrecioConverter = void 0;
const serviciosListasPrecioConverter = {
    toFirestore(servicioListaPrecio) {
        return servicioListaPrecio;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        // const locales: string[] = [];
        // if (
        //   data.locales != undefined &&
        //   data.locales != null &&
        //   isArray(data.locales)
        // ) {
        //   data.locales.map(e => {
        //     locales.push(e);
        //   });
        // }
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            locales: data.locales,
            // locales: locales,
            clonarId: data.clonarId,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.serviciosListasPrecioConverter = serviciosListasPrecioConverter;
