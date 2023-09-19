export interface cajaDepositoDeshacer {
  cajaOrigen: string;
  cajaDestino: string;
  idDeposito: string;
  accion: "cancelar" | "rechazar";
  descripcion: string;
}
