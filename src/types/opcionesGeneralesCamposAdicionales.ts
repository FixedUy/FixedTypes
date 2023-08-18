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
export const defectoCamposAdicionales: OpcionesGeneralesCamposAdicionales = {
  campoExtraEntidad: [] as CampoExtra[],
  campoExtraProducto: [] as CampoExtra[],
  campoExtraServicio: [] as CampoExtra[],
  campoExtraUsuario: [] as CampoExtra[]
};
