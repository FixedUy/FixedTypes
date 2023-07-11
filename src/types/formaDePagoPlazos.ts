interface FormasDePagoPlazos {
  id: string;
  nombre: string;
  cantDias: number;
  activo: boolean;
  ultimaEdicion: number;
}

const FormasDePagoPlazosConverter = {
  toFirestore(plazo: FormasDePagoPlazos) {
    return {};
  },
  fromFirestore(snapshot: any): FormasDePagoPlazos {
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

export {type FormasDePagoPlazos, FormasDePagoPlazosConverter};
