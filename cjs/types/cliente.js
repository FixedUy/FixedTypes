class Cliente {
    id;
    tipoDocumento;
    documento;
    razonSocial;
    pais;
    nombreComercial;
    direccion;
    localidad;
    departamento;
    direccionEntrega;
    descuento;
    emails;
    mailDgi;
    mailCopiaXml;
    vendedores;
    listaPrecioServicios;
    esProveedor;
    esCliente;
    activo;
    constructor(id, tipoDocumento, documento, razonSocial, pais, nombreComercial, direccion, localidad, departamento, direccionEntrega, descuento, emails, mailDgi, mailCopiaXml, vendedores, listaPrecioServicios, esProveedor, esCliente, activo) {
        this.id = id;
        this.tipoDocumento = tipoDocumento;
        this.documento = documento;
        this.razonSocial = razonSocial;
        this.pais = pais;
        this.nombreComercial = nombreComercial;
        this.direccion = direccion;
        this.localidad = localidad;
        this.departamento = departamento;
        this.direccionEntrega = direccionEntrega;
        this.descuento = descuento;
        this.emails = emails;
        this.mailDgi = mailDgi;
        this.mailCopiaXml = mailCopiaXml;
        this.vendedores = vendedores;
        this.listaPrecioServicios = listaPrecioServicios;
        this.esProveedor = esProveedor;
        this.esCliente = esCliente;
        this.activo = activo;
    }
}
const clienteConverter = {
    toFirestore(cliente) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new Cliente(snapshot.id, data.tipoDocumento, data.documento, data.razonSocial, data.pais, data.nombreComercial, data.direccion, data.localidad, data.departamento, data.direccionEntrega, data.descuento, data.emails, data.mailDgi, data.mailCopiaXml, data.vendedores, data.listaPrecioServicios, data.esProveedor, data.esCliente, data.activo);
    },
};
export { Cliente, clienteConverter };
