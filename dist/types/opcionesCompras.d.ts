export interface OpcionesCompras {
    comprobanteContado: boolean;
    comprobanteCredito: boolean;
    comprobanteDefecto: string;
    tasaIVADefecto: string;
    vistaPrecioDefecto: "conIVA" | "sinIVA";
    monedaDefecto: string;
    cantidadDecimales: number;
}
export declare const opcionesCompraDefecto: OpcionesCompras;
