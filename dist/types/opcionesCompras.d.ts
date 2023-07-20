export interface OpcionesCompras {
    comprobanteContado: boolean;
    comprobanteCredito: boolean;
    comprobanteDefecto: string;
    tasaIVADefecto: string;
    vistaPrecioDefecto: string;
}
export declare const defectoOpcionesCompras: {
    [key: string]: OpcionesCompras;
};
