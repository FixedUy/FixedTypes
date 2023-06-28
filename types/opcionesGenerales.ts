export interface OpcionesGenerales {
  monedaDefecto: string;
  tasaIVADefecto: string;
  logoGeneral: string;
  logoGeneralURL: string;
  nombreComercial: string;
  unidades: false;
}

export const defecto: { [key: string]: OpcionesGenerales } = {
  defecto: {
    nombreComercial: "",
    logoGeneral: "",
    logoGeneralURL: "",
    monedaDefecto: "",
    tasaIVADefecto: "",
    unidades: false
  }
};
