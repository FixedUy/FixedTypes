/* eslint-disable require-jsdoc */
class Local {
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

  constructor(
    id: string,
    nombreComercial: string,
    nombre: string,
    direccion: string,
    localidad: string,
    departamento: string,
    codigoDgi: number,
    logo: string,
    logoURL: string,
    activo: boolean,
    ultimaEdicion: number
  ) {
    this.id = id;
    this.nombreComercial = nombreComercial;
    this.nombre = nombre;
    this.direccion = direccion;
    this.localidad = localidad;
    this.departamento = departamento;
    this.codigoDgi = codigoDgi;
    this.logo = logo;
    this.logoURL = logoURL;
    this.activo = activo;
    this.ultimaEdicion = ultimaEdicion;
  }
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
      ultimaEdicion: local.ultimaEdicion,
    };
  },
  fromFirestore(snapshot): Local {
    const data = snapshot.data()!;
    return new Local(
      snapshot.id,
      data.nombreComercial,
      data.nombre,
      data.direccion,
      data.localidad,
      data.departamento,
      data.codigoDgi,
      data.logo,
      data.logoURL,
      data.activo,
      data.ultimaEdicion
    );
  },
};

export { Local, localConverter };
