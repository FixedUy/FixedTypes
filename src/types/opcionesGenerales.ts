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
  moduloResguardos: boolean;
}

export const defecto: {[key: string]: OpcionesGenerales} = {
  defecto: {
    nombreComercial: "",
    logoGeneral: "",
    logoGeneralURL: "",
    monedaDefecto: "",
    vistaPrecios: "",
    tasaIVADefecto: "",
    moduloServicios: false,
    moduloProductos: false,
    centroCostos: false,
    unidades: false,
    moduloResguardos: false
  }
};
