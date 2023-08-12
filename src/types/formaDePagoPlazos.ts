interface PagoEnPlazos {
  id: string;
  nombre: string;
  cantDias: number;
  activo: boolean;
  ultimaEdicion: number;
}

const pagoEnPlazosConverter = {
  toFirestore(plazo: PagoEnPlazos) {
    return plazo;
  },
  fromFirestore(snapshot: any): PagoEnPlazos {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      nombre: data.nombre,
      cantDias: data.cantDias,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type PagoEnPlazos, pagoEnPlazosConverter};
