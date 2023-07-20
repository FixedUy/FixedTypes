export interface OpcionesGeneralesServicios {
  nombreModuloServicios: string;
  nombreModuloServiciosSingular: string;
  tasaIVADefectoServicios: string;
  precioArbitrario: boolean;
}

export const defectoOpcionesGeneralesServicios: {
  [key: string]: OpcionesGeneralesServicios;
} = {
  defecto: {
    nombreModuloServicios: "",
    nombreModuloServiciosSingular: "",
    tasaIVADefectoServicios: "",
    precioArbitrario: false
  }
};
