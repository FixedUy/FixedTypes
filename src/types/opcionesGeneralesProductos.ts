export interface OpcionesGeneralesProductos {
  nombreModuloProductos: string;
  nombreModuloProductosSingular: string;
  tasaIVADefectoProductos: string;
  precioArbitrario: boolean;
  seriales: boolean;
}

export const defectoOpcionesGeneralesProductos: OpcionesGeneralesProductos = {
  nombreModuloProductos: "",
  nombreModuloProductosSingular: "",
  tasaIVADefectoProductos: "",
  precioArbitrario: false,
  seriales: false
};
