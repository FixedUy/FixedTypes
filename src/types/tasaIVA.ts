interface TasaIVA {
  id: string;
  nombre: string;
  sigla: string;
  valor: number;
  cfeDgi: "Basic" | "Exp" | "Min" | "Exe" | "Otro" | "";
  activoProductos: boolean;
  activoServicios: boolean;
  ultimaEdicion: number;
}
const tasaConverter = {
  toFirestore(tasa: TasaIVA) {
    return {};
  },
  fromFirestore(snapshot: any): TasaIVA {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      nombre: data.nombre,
      sigla: data.sigla,
      valor: data.valor,
      cfeDgi: data.cfeDgi,
      activoProductos: data.activoProductos,
      activoServicios: data.activoServicios,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type TasaIVA, tasaConverter};
