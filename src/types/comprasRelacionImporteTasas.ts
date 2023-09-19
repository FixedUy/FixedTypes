interface ComprasRelacionImporteTasas {
  tasaIva: string;
  importe: number;
  nroLinea: number;
}

const ComprasRelacionImporteTasasConverter = {
  toFirestore(comprasRelacionImporteTasas: ComprasRelacionImporteTasas) {
    return comprasRelacionImporteTasas;
  },
  fromFirestore(snapshot: any): ComprasRelacionImporteTasas {
    const data = snapshot.data()!;
    return {
      tasaIva: data.tasaIva,
      importe: data.importe,
      nroLinea: data.nroLinea
    };
  }
};

export {type ComprasRelacionImporteTasas, ComprasRelacionImporteTasasConverter};
