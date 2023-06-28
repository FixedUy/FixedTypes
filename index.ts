export class UnidadPrueba {
  version: number;
  id: string;
  nombre: string;
  activo: boolean;
  ultimaEdicion: number;

  constructor(
    version: number,
    id: string,
    nombre: string,
    activo: boolean,
    ultimaEdicion: number
  ) {
    this.version = version;
    this.id = id;
    this.nombre = nombre;
    this.activo = activo;
    this.ultimaEdicion = ultimaEdicion;
  }
}
