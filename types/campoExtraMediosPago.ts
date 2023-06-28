export class CampoExtraMediosPago {
  tipo: string;
  nombre: string;
  obligatorio: boolean;

  constructor(tipo: string, nombre: string, obligatorio: boolean) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.obligatorio = obligatorio;
  }
}
