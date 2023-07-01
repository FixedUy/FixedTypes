class Empresa {
    id;
    nombreComercial;
    rut;
    razonSocial;
    logoURL;
    constructor(id, nombreComercial, rut, razonSocial, logoURL) {
        this.id = id;
        this.nombreComercial = nombreComercial;
        this.rut = rut;
        this.razonSocial = razonSocial;
        this.logoURL = logoURL;
    }
}
const empresaConverter = {
    toFirestore(empresa) {
        return { nombreComercial: empresa.nombreComercial };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new Empresa(data.id, data.nombreComercial, data.rut, data.razonSocial, data.logoURL);
    },
};
export { Empresa, empresaConverter };
