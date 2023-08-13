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
}

export const opcionesGeneralesDefecto: {[key: string]: OpcionesGenerales} = {
  defecto: {
    nombreComercial: "",
    logoGeneral: "",
    logoGeneralURL: "",
    monedaDefecto: "",
    vistaPrecios: "sinIVA",
    tasaIVADefecto: "",
    moduloServicios: false,
    moduloProductos: false,
    centroCostos: false,
    unidades: false,
    moduloResguardos: false
  }
};
