// export * from "./types/campoExtraMediosPago";
// export * from "./types/cliente";
// export * from "./types/empresa";
// export * from "./types/local";
// export * from "./types/mediosPago";
// export * from "./types/moneda";
// export * from "./types/opcionesGenerales";
// export * from "./types/opcionesGeneralesServicios";
// export * from "./types/productosListasPrecio";
// export * from "./types/productosRubros";
// export * from "./types/servicio";
// export * from "./types/serviciosListasPrecio";
// export * from "./types/serviciosPrecios";
// export * from "./types/serviciosRubros";
// export * from "./types/tasaIVA";
// export * from "./types/unidad";
// export * from "./types/usuario";
// export * from "./types/usuariosSistemaInvitacion";

export class Empresa {
  id: string;
  nombreComercial: string;
  rut: string;
  razonSocial: string;
  logoURL: string;

  constructor(
    id: string,
    nombreComercial: string,
    rut: string,
    razonSocial: string,
    logoURL: string
  ) {
    this.id = id;
    this.nombreComercial = nombreComercial;
    this.rut = rut;
    this.razonSocial = razonSocial;
    this.logoURL = logoURL;
  }
}
