interface InterfazPendienteImporte {
  version: number;
  descripcion: string;
  importe: number;
  tasaIVA: string;
  nroLinea: number;
}

const InterfazPendienteImporteConverter = {
  toFirestore(interfazPendienteImporte: InterfazPendienteImporte) {
    return interfazPendienteImporte;
  },
  fromFirestore(snapshot: any): InterfazPendienteImporte {
    const data = snapshot.data()!;
    return {
      version: data.version,
      descripcion: data.descripcion,
      importe: data.importe,
      tasaIVA: data.tasaIVA,
      nroLinea: data.nroLinea
    };
  }
};

export {type InterfazPendienteImporte, InterfazPendienteImporteConverter};
