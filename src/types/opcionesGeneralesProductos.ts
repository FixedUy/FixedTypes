export interface OpcionesGeneralesProductos {
  nombreModuloProductos: string;
  nombreModuloProductosSingular: string;
  precioArbitrario: boolean;
}

export const defectoOpcionesGeneralesProductos: {
  [key: string]: OpcionesGeneralesProductos;
} = {
  defecto: {
    nombreModuloProductos: "",
    nombreModuloProductosSingular: "",
    precioArbitrario: false
  }
};
