interface VentasRelacionImporteTasas {
  tasaIva: string;
  importe: number;
  nroLinea: number;
}

const VentasRelacionImporteTasasConverter = {
  toFirestore(ventasRelacionImporteTasas: VentasRelacionImporteTasas) {
    return ventasRelacionImporteTasas;
  },
  fromFirestore(snapshot: any): VentasRelacionImporteTasas {
    const data = snapshot.data()!;
    return {
      tasaIva: data.tasaIva,
      importe: data.importe,
      nroLinea: data.nroLinea
    };
  }
};

export {type VentasRelacionImporteTasas, VentasRelacionImporteTasasConverter};
