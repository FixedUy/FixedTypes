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

export const opcionesGeneralesDefecto: OpcionesGenerales = {
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
  moduloResguardos: false,
  tiposCodigo: [],
  modificarDecimales: false,
  cantidadDecimalesDefecto: 2
};
