/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
class ProductosRubro {
  version: number;
  id: string;
  codigo: string;
  nombre: string;
  padreId: string | null;
  nombreCompleto: string;
  activo: boolean;
  esHoja: boolean;
  ultimaEdicion: number;

  constructor(
    version: number,
    id: string,
    codigo: string,
    nombre: string,
    padreId: string | null,
    nombreCompleto: string,
    activo: boolean,
    esHoja: boolean,
    ultimaEdicion: number
  ) {
    this.version = version;
    this.id = id;
    this.codigo = codigo;
    this.nombre = nombre;
    this.padreId = padreId;
    this.nombreCompleto = nombreCompleto;
    this.activo = activo;
    this.esHoja = esHoja;
    this.ultimaEdicion = ultimaEdicion;
  }
}

const ProductosRubroConverter = {
  toFirestore(servicioRubros: ProductosRubro) {
    servicioRubros;
    return {};
  },
  fromFirestore(snapshot: any): ProductosRubro {
    const data = snapshot.data()!;
    return new ProductosRubro(
      data.version,
      snapshot.id,
      data.codigo,
      data.nombre,
      data.padreId,
      data.nombreCompleto,
      data.activo,
      data.esHoja,
      data.ultimaEdicion
    );
  }
};

export {ProductosRubro, ProductosRubroConverter};
