interface ComprasFacturasDevueltaImporte {
  idDocumento: string;
  idCompra: string;
  descripcion: string;
  relacionImporteTasasPendientes: ComprasFacturasDevueltaImporte[];
  relacionImporteTasasCancelar: ComprasFacturasDevueltaImporte[];
}

const ComprasFacturasDevueltaImporteConverter = {
  toFirestore(comprasFacturasDevueltaImporte: ComprasFacturasDevueltaImporte) {
    return comprasFacturasDevueltaImporte;
  },
  fromFirestore(snapshot: any): ComprasFacturasDevueltaImporte {
    const data = snapshot.data()!;
    return {
      idDocumento: data.idDocumento,
      idCompra: data.idCompra,
      descripcion: data.descripcion,
      relacionImporteTasasPendientes: data.relacionImporteTasasPendientes,
      relacionImporteTasasCancelar: data.relacionImporteTasasCancelar
    };
  }
};

export {
  type ComprasFacturasDevueltaImporte,
  ComprasFacturasDevueltaImporteConverter
};
