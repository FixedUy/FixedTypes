class CentroCostos {
    id;
    nombre;
    valorExportacion;
    superior;
    constructor(id, nombre, valorExportacion, superior) {
        this.id = id;
        this.nombre = nombre;
        this.valorExportacion = valorExportacion;
        this.superior = superior;
    }
}
const centroCostosConverter = {
    toFirestore(centroCostos) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new CentroCostos(snapshot.id, data.nombre, data.valorExportacion, data.superior);
    },
};
export { CentroCostos, centroCostosConverter };
