"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
class Empresa {
    constructor(id, nombreComercial, rut, razonSocial, logoURL) {
        this.id = id;
        this.nombreComercial = nombreComercial;
        this.rut = rut;
        this.razonSocial = razonSocial;
        this.logoURL = logoURL;
    }
}
exports.Empresa = Empresa;
