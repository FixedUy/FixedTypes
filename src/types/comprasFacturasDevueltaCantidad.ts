import {ComprasDevolucionLineaCantidad} from "./comprasDevolucionLineaCantidad";

interface ComprasFacturasDevueltaCantidad {
  idDocumento: string;
  idCompra: string;
  lineasCompra: ComprasDevolucionLineaCantidad[];
}

const ComprasFacturasDevueltaCantidadConverter = {
  toFirestore(
    comprasFacturasDevueltaCantidad: ComprasFacturasDevueltaCantidad
  ) {
    return comprasFacturasDevueltaCantidad;
  },
  fromFirestore(snapshot: any): ComprasFacturasDevueltaCantidad {
    const data = snapshot.data()!;
    return {
      idDocumento: data.idDocumento,
      idCompra: data.idCompra,
      lineasCompra: data.lineasCompra
    };
  }
};

export {
  type ComprasFacturasDevueltaCantidad,
  ComprasFacturasDevueltaCantidadConverter
};
