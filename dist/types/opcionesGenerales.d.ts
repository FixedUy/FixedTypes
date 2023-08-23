export interface OpcionesGenerales {
    monedaDefecto: string;
    vistaPrecios: "conIVA" | "sinIVA";
    tasaIVADefecto: string;
    logoGeneral: string;
    logoGeneralURL: string;
    nombreComercial: string;
    moduloServicios: boolean;
    moduloProductos: boolean;
    centroCostos: boolean;
    unidades: boolean;
    moduloResguardos: boolean;
    tiposCodigo: string[];
    modificarDecimales: boolean;
    cantidadDecimalesDefecto: number;
}
export declare const opcionesGeneralesDefecto: OpcionesGenerales;
