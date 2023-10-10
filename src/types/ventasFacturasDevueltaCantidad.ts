import {VentasDevolucionLineaCantidad} from "./ventasDevolucionLineaCantidad";

interface VentasFacturasDevueltaCantidad {
  idDocumento: string;
  idVenta: string;
  lineasVenta: VentasDevolucionLineaCantidad[];
}

const VentasFacturasDevueltaCantidadConverter = {
  toFirestore(ventasFacturasDevueltaCantidad: VentasFacturasDevueltaCantidad) {
    return ventasFacturasDevueltaCantidad;
  },
  fromFirestore(snapshot: any): VentasFacturasDevueltaCantidad {
    const data = snapshot.data()!;
    return {
      idDocumento: data.idDocumento,
      idVenta: data.idVenta,
      lineasVenta: data.lineasVenta
    };
  }
};

export {
  type VentasFacturasDevueltaCantidad,
  VentasFacturasDevueltaCantidadConverter
};
