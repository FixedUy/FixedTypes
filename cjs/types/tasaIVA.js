class TasaIVA {
    id;
    nombre;
    sigla;
    valor;
    cfeDgi;
    activoProductos;
    activoServicios;
    ultimaEdicion;
    constructor(id, nombre, sigla, valor, cfeDgi, activoProductos, activoServicios, ultimaEdicion) {
        this.id = id;
        this.nombre = nombre;
        this.sigla = sigla;
        this.valor = valor;
        this.cfeDgi = cfeDgi;
        this.activoProductos = activoProductos;
        this.activoServicios = activoServicios;
        this.ultimaEdicion = ultimaEdicion;
    }
}
const tasaConverter = {
    toFirestore(tasa) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new TasaIVA(snapshot.id, data.nombre, data.sigla, data.valor, data.cfeDgi, data.activoProductos, data.activoServicios, data.ultimaEdicion);
    },
};
export { TasaIVA, tasaConverter };
