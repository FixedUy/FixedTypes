import { TipoMovimiento } from "../movimientoCuentaCorriente";
export interface AfectarCuentaCorriente {
    idEntidad: string;
    importe: number;
    idMoneda: string;
    descripcion: string;
    tipo: TipoMovimiento;
    fecha: number;
    idDocumento: string;
}
