interface FacturasAfectadas {
  id: string;
  idDocumento: string;
  descripcion: string;
  importe: number;
  saldoOriginal: number;
  saldo: number;
  nroLinea: number;
}

interface ProveedoresRecibos {
  version: number;
  id: string;
  fechaComprobante: number;
  fechaComprobanteString: string;
  fechaCreacion: number;
  comprobante: string;
  serie: string;
  numero: number;
  proveedorId: string;
  proveedorNombre: string;
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
}

const ProveedoresRecibosConverter = {
  toFirestore(compra: ProveedoresRecibos) {
    return compra;
  },
  fromFirestore(snapshot: any): ProveedoresRecibos {
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
      proveedorId: data.proveedorId,
      proveedorNombre: data.proveedorNombre,
      moneda: data.moneda,
      facturasAfectadas: data.facturasAfectadas,
      tipo: data.tipo,
      montoIVA: data.montoIVA,
      total: data.total,
      saldo: data.saldo,
      activo: data.activo,
      observaciones: data.observaciones,
      usuario: data.usuario,
      local: data.local
    };
  }
};

export {type ProveedoresRecibos, ProveedoresRecibosConverter};
export type {FacturasAfectadas};
