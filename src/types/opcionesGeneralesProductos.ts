export interface OpcionesGeneralesProductos {
  nombreModuloProductos: string;
  nombreModuloProductosSingular: string;
  tasaIVADefectoProductos: string;
  precioArbitrario: boolean;
}

export const defectoOpcionesGeneralesProductos: {
  [key: string]: OpcionesGeneralesProductos;
} = {
  defecto: {
    nombreModuloProductos: "",
    nombreModuloProductosSingular: "",
    tasaIVADefectoProductos: "",
    precioArbitrario: false
  }
};
