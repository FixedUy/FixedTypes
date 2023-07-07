interface CentroCostos {
  id: string;
  nombre: string;
  valorExportacion: number;
  activo: boolean;
  ultimaEdicion: number;
}

const centroCostosConverter = {
  toFirestore(centroCostos: CentroCostos) {
    return {};
  },
  fromFirestore(snapshot: any): CentroCostos {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      nombre: data.nombre,
      valorExportacion: data.valorExportacion,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type CentroCostos, centroCostosConverter};
