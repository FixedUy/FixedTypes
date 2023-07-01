class ProductosRubro {
    version;
    id;
    codigo;
    nombre;
    padreId;
    nombreCompleto;
    activo;
    esHoja;
    ultimaEdicion;
    constructor(version, id, codigo, nombre, padreId, nombreCompleto, activo, esHoja, ultimaEdicion) {
        this.version = version;
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.padreId = padreId;
        this.nombreCompleto = nombreCompleto;
        this.activo = activo;
        this.esHoja = esHoja;
        this.ultimaEdicion = ultimaEdicion;
    }
}
const ProductosRubroConverter = {
    toFirestore(servicioRubros) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new ProductosRubro(data.version, snapshot.id, data.codigo, data.nombre, data.padreId, data.nombreCompleto, data.activo, data.esHoja, data.ultimaEdicion);
    },
};
export { ProductosRubro, ProductosRubroConverter };
