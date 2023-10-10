import {VentasRelacionImporteTasas} from "./ventasRelacionImporteTasas";

interface VentasFacturasDevueltaImporte {
  idDocumento: string;
  idVenta: string;
  descripcion: string;
  relacionImporteTasasPendientes: VentasRelacionImporteTasas[];
  relacionImporteTasasCancelar: VentasRelacionImporteTasas[];
}

const VentasFacturasDevueltaImporteConverter = {
  toFirestore(ventasFacturasDevueltaImporte: VentasFacturasDevueltaImporte) {
    return ventasFacturasDevueltaImporte;
  },
  fromFirestore(snapshot: any): VentasFacturasDevueltaImporte {
    const data = snapshot.data()!;
    return {
      idDocumento: data.idDocumento,
      idVenta: data.idVenta,
      descripcion: data.descripcion,
      relacionImporteTasasPendientes: data.relacionImporteTasasPendientes,
      relacionImporteTasasCancelar: data.relacionImporteTasasCancelar
    };
  }
};

export {
  type VentasFacturasDevueltaImporte,
  VentasFacturasDevueltaImporteConverter
};
