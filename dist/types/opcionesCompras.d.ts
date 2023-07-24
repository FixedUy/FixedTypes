export interface OpcionesCompras {
    comprobanteContado: boolean;
    comprobanteCredito: boolean;
    comprobanteDefecto: string;
    tasaIVADefecto: string;
    vistaPrecioDefecto: string;
    monedaDefecto: string;
    cantidadDecimales: number;
}
export declare const defectoOpcionesCompras: {
    [key: string]: OpcionesCompras;
};
