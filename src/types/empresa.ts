interface Empresa {
  id: string;
  nombreComercial: string;
  rut: string;
  razonSocial: string;
  logoURL: string;
}

const empresaConverter = {
  toFirestore(empresa: Empresa) {
    return {nombreComercial: empresa.nombreComercial};
  },
  fromFirestore(snapshot: any): Empresa {
    const data = snapshot.data()!;
    return {
      id: data.id,
      nombreComercial: data.nombreComercial,
      rut: data.rut,
      razonSocial: data.razonSocial,
      logoURL: data.logoURL
    };
  }
};

export {type Empresa, empresaConverter};
