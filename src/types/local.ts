interface Local {
  id: string;
  nombreComercial: string;
  nombre: string;
  direccion: string;
  localidad: string;
  departamento: string;
  codigoDgi: number;
  logo: string;
  logoURL: string;
  activo: boolean;
  ultimaEdicion: number;
}

const localConverter = {
  toFirestore(local: Local) {
    return local;
  },
  fromFirestore(snapshot: any): Local {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      nombreComercial: data.nombreComercial,
      nombre: data.nombre,
      direccion: data.direccion,
      localidad: data.localidad,
      departamento: data.departamento,
      codigoDgi: data.codigoDgi,
      logo: data.logo,
      logoURL: data.logoURL,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type Local, localConverter};
