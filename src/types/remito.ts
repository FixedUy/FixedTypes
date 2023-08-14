import {RemitoItem} from "./remitoItem";
import {Cliente} from "./cliente";

interface Remito {
  version: number;
  id: string;
  fechaComprobante: number;
  fechaComprobanteString: string;
  fechaCreacion: number;
  numero: string;
  localIngresa: string | null;
  localSale: string | null;
  entidad: Cliente;
  items: RemitoItem[];
  observaciones: string;
  tipo: RemitoTipo;
  autor: string;
  activo: boolean;
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
      id: snapshot.id,
      fechaComprobante: data.fechaComprobante,
      fechaComprobanteString: data.fechaComprobanteString,
      fechaCreacion: data.fechaCreacion,
      numero: data.numero,
      localIngresa: data.localIngresa,
      localSale: data.localSale,
      entidad: data.entidad,
      items: data.items,
      observaciones: data.observaciones,
      tipo: data.tipo,
      autor: data.autor,
      activo: data.activo
    };
  }
};

export {type Remito, RemitoConverter};
