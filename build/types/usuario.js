import { Empresa } from "./empresa";
import { isArray } from "lodash";
class Usuario {
    id;
    nombre;
    mail;
    creadoEl;
    creadoElString;
    empresas;
    vendedor;
    activo;
    ultimaEdicion;
    constructor(id, nombre, mail, creadoEl, empresas, vendedor, activo, ultimaEdicion) {
        this.id = id;
        this.nombre = nombre;
        this.mail = mail;
        this.creadoEl = creadoEl;
        this.empresas = empresas;
        this.vendedor = vendedor;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
        if (creadoEl != null) {
            const fecha = new Date(creadoEl);
            let diaNumber = fecha.getDate();
            let dia = "";
            if (diaNumber < 10) {
                dia = "0" + diaNumber;
            }
            else {
                dia = diaNumber.toString();
            }
            let mesNumber = fecha.getMonth() + 1;
            let mes = "";
            if (mesNumber < 10) {
                mes = "0" + mesNumber;
            }
            else {
                mes = mesNumber.toString();
            }
            let horaNumber = fecha.getHours() + 1;
            let hora = "";
            if (horaNumber < 10) {
                hora = "0" + horaNumber;
            }
            else {
                hora = horaNumber.toString();
            }
            let minutoNumber = fecha.getMinutes() + 1;
            let minuto = "";
            if (minutoNumber < 10) {
                minuto = "0" + minutoNumber;
            }
            else {
                minuto = minutoNumber.toString();
            }
            this.creadoElString = `${dia}/${mes}/${fecha.getFullYear()} ${hora}:${minuto}`;
        }
        else {
            this.creadoElString = "";
        }
    }
}
const usuarioConverter = {
    toFirestore(Usuario) {
        return { nombre: Usuario.nombre };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        const empresas = [];
        if (data.empresas != undefined &&
            data.empresas != null &&
            isArray(data.empresas)) {
            data.empresas.map(e => {
                empresas.push(new Empresa(e["id"], e["nombreComercial"], e["rut"], e["razonSocial"], e["logoURL"]));
            });
        }
        return new Usuario(snapshot.id, data.nombre, data.mail, data.creadoEl, empresas, data.vendedor, data.activo, data.ultimaEdicion);
    }
};
export { Usuario, usuarioConverter };
