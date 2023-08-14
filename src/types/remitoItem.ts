interface RemitoItem {
  tipo: "producto" | "servicio";
  cantidad: number;
  tipoId: string; // el id del producto o servicio
  descripcion: string; // el nombre del producto o servicio
}

export {type RemitoItem};
