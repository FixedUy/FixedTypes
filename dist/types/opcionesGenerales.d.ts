export interface OpcionesGenerales {
    monedaDefecto: string;
    vistaPrecios: string;
    tasaIVADefecto: string;
    logoGeneral: string;
    logoGeneralURL: string;
    nombreComercial: string;
    moduloServicios: boolean;
    moduloProductos: boolean;
    centroCostos: boolean;
    unidades: boolean;
}
export declare const defecto: {
    [key: string]: OpcionesGenerales;
};
