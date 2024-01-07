import { AccesoSMTP } from "../accesoSMTP";
export interface accesoSMTPguardar {
    accion: "agregar" | "quitar";
    acceso: AccesoSMTP | null;
    mailEnvioPrueba: string;
}
