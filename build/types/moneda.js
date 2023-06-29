class Moneda {
    id;
    nombre;
    simbolo;
    codigoBcu;
    codigoIso;
    numeroIso;
    activo;
    ultimaEdicion;
    constructor(id, nombre, simbolo, codigoBcu, codigoIso, numeroIso, activo, ultimaEdicion) {
        this.id = id;
        this.nombre = nombre;
        this.simbolo = simbolo;
        this.codigoBcu = codigoBcu;
        this.codigoIso = codigoIso;
        this.numeroIso = numeroIso;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
    }
}
const monedaConverter = {
    toFirestore(moneda) {
        return {};
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new Moneda(snapshot.id, data.nombre, data.simbolo, data.codigoBcu, data.codigoIso, data.numeroIso, data.activo, data.ultimaEdicion);
    },
};
export { Moneda, monedaConverter };
