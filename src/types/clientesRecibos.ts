import {Cliente} from "./cliente";
import {FacturasAfectadas} from "./proveedoresRecibos";

// interface FacturasAfectadas {
//   id: string;
//   idDocumento: string;
//   descripcion: string;
//   importe: number;
//   saldoOriginal: number;
//   saldo: number;
//   nroLinea: number;
// }

interface ClientesRecibos {
  version: number;
  id: string;
  fechaComprobante: number;
  fechaComprobanteString: string;
  fechaCreacion: number;
  comprobante: string;
  serie: string;
  numero: number;
  cliente: Cliente;
  moneda: string;
  facturasAfectadas: FacturasAfectadas[];
  tipo: string;
  montoIVA: number;
  total: number;
  saldo: number;
  activo: boolean;
  observaciones: string;
  usuario: string;
  local: string;
  tcfe: string;
}

const ClientesRecibosConverter = {
  toFirestore(recibo: ClientesRecibos) {
    return recibo;
  },
  fromFirestore(snapshot: any): ClientesRecibos {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      fechaComprobante: data.fechaComprobante,
      fechaComprobanteString: data.fechaComprobanteString,
      fechaCreacion: data.fechaCreacion,
      comprobante: data.comprobante,
      serie: data.serie,
      numero: data.numero,
      cliente: data.cliente,
      moneda: data.moneda,
      facturasAfectadas: data.facturasAfectadas,
      tipo: data.tipo,
      montoIVA: data.montoIVA,
      total: data.total,
      saldo: data.saldo,
      activo: data.activo,
      observaciones: data.observaciones,
      usuario: data.usuario,
      local: data.local,
      tcfe: data.tcfe
    };
  }
};

export {type ClientesRecibos, ClientesRecibosConverter};
// export type {FacturasAfectadas};
