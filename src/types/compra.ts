import {Cliente} from "./cliente";
import {LineaCompra} from "./lineaCompra";

interface Compra {
  version: number;
  id: string;
  fechaNumero: number;
  fechaString: string;
  comprobante: string;
  cliente: Cliente;
  tipo: string;
  lineaCompra: LineaCompra[];
  total: number;
  saldo: number;
  activo: boolean;
}

const CompraConverter = {
  toFirestore(compra: Compra) {
    return {};
  },
  fromFirestore(snapshot: any): Compra {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      fechaNumero: data.fechaNumero,
      fechaString: data.fechaString,
      comprobante: data.comprobante,
      cliente: data.cliente,
      tipo: data.tipo,
      lineaCompra: data.lineaCompra,
      total: data.total,
      saldo: data.saldo,
      activo: data.activo
    };
  }
};

export {type Compra, CompraConverter};
