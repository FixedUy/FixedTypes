export interface OpcionesCompras {
  comprobanteContado: boolean;
  comprobanteCredito: boolean;
  comprobanteDefecto: string;
  tasaIVADefecto: string;
  vistaPrecioDefecto: string;
}

export const defectoOpcionesCompras: {
  [key: string]: OpcionesCompras;
} = {
  defecto: {
    comprobanteContado: false,
    comprobanteCredito: false,
    comprobanteDefecto: "",
    tasaIVADefecto: "",
    vistaPrecioDefecto: ""
  }
};
