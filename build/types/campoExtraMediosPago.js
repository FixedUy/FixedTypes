class CampoExtraMediosPago {
    tipo;
    nombre;
    obligatorio;
    constructor(tipo, nombre, obligatorio) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.obligatorio = obligatorio;
    }
}
const CampoExtraMediosPagoConverter = {
    toFirestore(campoExtra) {
        return {
            tipo: campoExtra.tipo,
            nombre: campoExtra.nombre,
            obligatorio: campoExtra.obligatorio,
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new CampoExtraMediosPago(data.tipo, data.nombre, data.obligatorio);
    },
    // fromDataObject(data: any): CampoExtraMediosPago {
    //   return new CampoExtraMediosPago(
    //     data.tipo,
    //     data.nombre,
    //     data.obligatorio
    //   );
    // }
};
export { CampoExtraMediosPago, CampoExtraMediosPagoConverter };
