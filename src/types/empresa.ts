class Empresa {
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

const empresaConverter = {
  toFirestore(empresa: Empresa) {
    return { nombreComercial: empresa.nombreComercial };
  },
  fromFirestore(snapshot): Empresa {
    const data = snapshot.data()!;
    return new Empresa(
      data.id,
      data.nombreComercial,
      data.rut,
      data.razonSocial,
      data.logoURL
    );
  },
};

export { Empresa, empresaConverter };
