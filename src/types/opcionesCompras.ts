export interface OpcionesCompras {
  comprobanteContado: boolean;
  comprobanteCredito: boolean;
  comprobanteDefecto: string;
  tasaIVADefecto: string;
  vistaPrecioDefecto: string;
  monedaDefecto: string;
  cantidadDecimales: number;
}

export const defectoOpcionesCompras: {
  [key: string]: OpcionesCompras;
} = {
  defecto: {
    comprobanteContado: false,
    comprobanteCredito: false,
    comprobanteDefecto: "",
    tasaIVADefecto: "",
    vistaPrecioDefecto: "",
    monedaDefecto: "",
    cantidadDecimales: 0
  }
};
