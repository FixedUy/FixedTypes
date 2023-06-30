export interface OpcionesGenerales {
  monedaDefecto: string;
  tasaIVADefecto: string;
  logoGeneral: string;
  logoGeneralURL: string;
  nombreComercial: string;
  centroCostos: boolean;
  unidades: boolean;
}

export const defecto: { [key: string]: OpcionesGenerales } = {
  defecto: {
    nombreComercial: "",
    logoGeneral: "",
    logoGeneralURL: "",
    monedaDefecto: "",
    tasaIVADefecto: "",
    centroCostos: false,
    unidades: false,
  },
};
