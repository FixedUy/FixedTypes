import {RemitoItem} from "./remitoItem";

interface Remito {
  version: number;
  empresaId: string;
  id: string;
  fechaComprobante: number;
  fechaComprobanteString: string;
  fechaCreacion: number;
  comprobante: string;
  numero: number;
  localIngresa: string | null;
  localSale: string | null;
  entidadId: string;
  entidadNombre: string;
  items: RemitoItem[];
  observaciones: string;
  tipo: RemitoTipo;
  autor: string;
  activo: boolean;
  cfe: string;
}

export enum RemitoTipo {
  Ingreso = "ingreso",
  Salida = "salida",
  Transferencia = "transferencia"
}

const RemitoConverter = {
  toFirestore(remito: Remito) {
    return remito;
  },
  fromFirestore(snapshot: any): Remito {
    const data = snapshot.data()!;
    return {
      version: data.version,
      empresaId: data.empresaId,
      id: snapshot.id,
      fechaComprobante: data.fechaComprobante,
      fechaComprobanteString: data.fechaComprobanteString,
      fechaCreacion: data.fechaCreacion,
      comprobante: data.comprobante,
      numero: data.numero,
      localIngresa: data.localIngresa,
      localSale: data.localSale,
      entidadId: data.entidadId,
      entidadNombre: data.entidadNombre,
      items: data.items,
      observaciones: data.observaciones,
      tipo: data.tipo,
      autor: data.autor,
      activo: data.activo,
      cfe: data.cfe
    };
  }
};

export {type Remito, RemitoConverter};
