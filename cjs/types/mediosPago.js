import { CampoExtraMediosPago } from "./campoExtraMediosPago";
import { isArray } from "lodash";
class MediosPago {
    version;
    id;
    nombre;
    identificable;
    requiereVencimiento;
    camposExtra;
    activo;
    ultimaEdicion;
    constructor(version, id, nombre, identificable, requiereVencimiento, camposExtra, activo, ultimaEdicion) {
        this.version = version;
        this.id = id;
        this.nombre = nombre;
        this.identificable = identificable;
        this.requiereVencimiento = requiereVencimiento;
        this.camposExtra = camposExtra;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
    }
}
const MediosPagoConverter = {
    toFirestore(mediosPago) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const campoExtraMediosPago = [];
        if (data.camposExtra != undefined &&
            data.camposExtra != null &&
            isArray(data.camposExtra)) {
            data.camposExtra.map((e) => {
                campoExtraMediosPago.push(new CampoExtraMediosPago(e["tipo"], e["nombre"], e["obligatorio"]));
            });
        }
        return new MediosPago(data.version, snapshot.id, data.nombre, data.identificable, data.requiereVencimiento, campoExtraMediosPago, data.activo, data.ultimaEdicion);
    },
};
export { MediosPago, MediosPagoConverter };
