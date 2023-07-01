export interface OpcionesGeneralesCamposAdicionales {
  campoExtraEntidad: CampoExtra[];
  campoExtraProducto: CampoExtra[];
  campoExtraServicio: CampoExtra[];
  campoExtraUsuario: CampoExtra[];
}

export interface CampoExtra {
  nombre: string;
  clave: string;
}
export const campos: { [key: string]: OpcionesGeneralesCamposAdicionales } = {
  campos: {
    campoExtraEntidad: [],
    campoExtraProducto: [],
    campoExtraServicio: [],
    campoExtraUsuario: []
  }
};
