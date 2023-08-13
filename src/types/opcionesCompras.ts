export interface OpcionesCompras {
  comprobanteContado: boolean;
  comprobanteCredito: boolean;
  comprobanteDefecto: string;
  tasaIVADefecto: string;
  vistaPrecioDefecto: "conIVA" | "sinIVA";
  monedaDefecto: string;
  cantidadDecimales: number;
}

export const opcionesCompraDefecto: {
  [key: string]: OpcionesCompras;
} = {
  defecto: {
    comprobanteContado: true,
    comprobanteCredito: true,
    comprobanteDefecto: "",
    tasaIVADefecto: "",
    vistaPrecioDefecto: "sinIVA",
    monedaDefecto: "",
    cantidadDecimales: 2
  }
};
