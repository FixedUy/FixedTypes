import {CajaTipoMovimiento} from "../cajaMovimientos";

export interface CajaAfectar {
  caja: string;
  detalle: string;
  moneda: string;
  medioCobro: string;
  monto: number;
  tipo: CajaTipoMovimiento;
  idDocumento: string;
}
