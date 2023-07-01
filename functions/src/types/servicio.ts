/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
import {isArray} from "lodash";
import {ServiciosPrecios} from "./serviciosPrecios";
import {ServiciosRubro} from "./serviciosRubros";

class Servicio {
  version: number;
  id: string;
  codigo: string[];
  nombre: string;
  rubro: ServiciosRubro | string;
  listaPrecio: {[key: string]: ServiciosPrecios};
  unidad: string;
  activo: boolean;
  campoExtra: {[key: string]: string};

  // buscablePor: string[];

  constructor(
    version: number,
    id: string,
    codigo: string[],
    nombre: string,
    rubro: ServiciosRubro | string,
    listaPrecio: {[key: string]: ServiciosPrecios},
    unidad: string,
    activo: boolean,
    campoExtra: {[key: string]: string}
    // buscablePor: string[],
  ) {
    this.version = version;
    this.id = id;
    this.codigo = codigo;
    this.nombre = nombre;
    this.rubro = rubro;
    this.listaPrecio = listaPrecio;
    this.unidad = unidad;
    this.activo = activo;
    this.campoExtra = campoExtra;
    // this.buscablePor = buscablePor;
  }
}

const ServicioConverter = {
  toFirestore(servicio: Servicio) {
    return {};
  },
  fromFirestore(snapshot: any): Servicio {
    const data = snapshot.data()!;
    const listaPrecio: {[key: string]: ServiciosPrecios} = {};
    if (
      data.listaPrecio != undefined &&
      data.listaPrecio != null &&
      isArray(data.listaPrecio)
    ) {
      data.listaPrecio.map((e: any) => {
        listaPrecio[e["id"]] = new ServiciosPrecios(
          e["id"],
          e["nombre"],
          e["tasa"],
          e["precioSinIva"],
          e["precioConIva"],
          e["moneda"],
          e["precioArbitrario"]
        );
      });
    }

    return new Servicio(
      data.version,
      snapshot.id,
      data.codigo,
      data.nombre,
      data.rubro,
      listaPrecio,
      data.unidad,
      data.activo,
      data.campoExtra
      // data.buscablePor,
    );
  }
};

export {Servicio, ServicioConverter};
