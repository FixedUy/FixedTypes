import {RemitoItem} from "./remitoItem";
import {Cliente} from "./cliente";
import {Local} from "./local";

interface Remito {
  version: string;
  id: string;
  fechaComprobante: number;
  fechaComprobanteString: string;
  fechaCreacion: string;
  numero: string;
  localIngresa: Local | null;
  localSale: Local | null;
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

const remitoConverter = {
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

export {type Remito, remitoConverter};
