export interface OpcionesGeneralesProductos {
  nombreModuloProductos: string;
  nombreModuloProductosSingular: string;
  tasaIVADefectoProductos: string;
  precioArbitrario: boolean;
}

export const defectoOpcionesGeneralesProductos: OpcionesGeneralesProductos = {
  nombreModuloProductos: "",
  nombreModuloProductosSingular: "",
  tasaIVADefectoProductos: "",
  precioArbitrario: false
};
