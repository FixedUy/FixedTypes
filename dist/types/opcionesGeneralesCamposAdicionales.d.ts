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
export declare const defectoCamposAdicionales: OpcionesGeneralesCamposAdicionales;
