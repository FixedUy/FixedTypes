/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
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
