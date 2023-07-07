export interface OpcionesGenerales {
  monedaDefecto: string;
  tasaIVADefecto: string;
  logoGeneral: string;
  logoGeneralURL: string;
  nombreComercial: string;
  moduloServicios: boolean;
  moduloProductos: boolean;
  centroCostos: boolean;
  unidades: boolean;
}

export const defecto: {[key: string]: OpcionesGenerales} = {
  defecto: {
    nombreComercial: "",
    logoGeneral: "",
    logoGeneralURL: "",
    monedaDefecto: "",
    tasaIVADefecto: "",
    moduloServicios: false,
    moduloProductos: false,
    centroCostos: false,
    unidades: false
  }
};
