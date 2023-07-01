/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
class CentroCostos {
  id: string;
  nombre: string;
  valorExportacion: number;
  superior: null;

  constructor(
    id: string,
    nombre: string,
    valorExportacion: number,
    superior: null
  ) {
    this.id = id;
    this.nombre = nombre;
    this.valorExportacion = valorExportacion;
    this.superior = superior;
  }
}

const centroCostosConverter = {
  toFirestore(centroCostos: CentroCostos) {
    return {};
  },
  fromFirestore(snapshot: any): CentroCostos {
    const data = snapshot.data()!;
    return new CentroCostos(
      snapshot.id,
      data.nombre,
      data.valorExportacion,
      data.superior
    );
  }
};

export {CentroCostos, centroCostosConverter};
