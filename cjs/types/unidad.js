class Unidad {
    version;
    id;
    nombre;
    activo;
    ultimaEdicion;
    constructor(version, id, nombre, activo, ultimaEdicion) {
        this.version = version;
        this.id = id;
        this.nombre = nombre;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
    }
}
const UnidadConverter = {
    toFirestore(unidad) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new Unidad(data.version, snapshot.id, data.nombre, data.activo, data.ultimaEdicion);
    },
};
export { Unidad, UnidadConverter };
