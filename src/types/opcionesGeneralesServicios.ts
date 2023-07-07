export interface OpcionesGeneralesServicios {
  nombreModuloServicios: string;
  nombreModuloServiciosSingular: string;
  precioArbitrario: boolean;
}

export const defectoOpcionesGeneralesServicios: {
  [key: string]: OpcionesGeneralesServicios;
} = {
  defecto: {
    nombreModuloServicios: "",
    nombreModuloServiciosSingular: "",
    precioArbitrario: false
  }
};
