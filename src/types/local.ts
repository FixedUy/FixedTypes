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
    return {
      id: local.id,
      nombreComercial: local.nombreComercial,
      nombre: local.nombre,
      direccion: local.direccion,
      localidad: local.localidad,
      departamento: local.departamento,
      codigoDgi: local.codigoDgi,
      logo: local.logo,
      logoURL: local.logoURL,
      activo: local.activo,
      ultimaEdicion: local.ultimaEdicion
    };
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
