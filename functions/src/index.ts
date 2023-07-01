// export * from "./types/campoExtraMediosPago";
// export * from "./types/centroCostos";
// export * from "./types/cliente";
// export * from "./types/empresa";
// export * from "./types/local";
// export * from "./types/mediosPago";
// export * from "./types/moneda";
// export * from "./types/opcionesGenerales";
// export * from "./types/opcionesGeneralesServicios";
// export * from "./types/producto";
// export * from "./types/productosListasPrecio";
// export * from "./types/productosRubros";
// export * from "./types/productosPrecios";
// export * from "./types/servicio";
// export * from "./types/serviciosListasPrecio";
// export * from "./types/serviciosPrecios";
// export * from "./types/serviciosRubros";
// export * from "./types/tasaIVA";
// export * from "./types/unidad";
// export * from "./types/usuario";
// export * from "./types/usuariosSistemaInvitacion";
// export * from "./types/opcionesGeneralesCamposAdicionales";

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
import {admin, functions} from "./firebase";
import {usuarioConverter} from "./types/usuario";

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addmessage = functions.https.onRequest(async (req, res) => {
  // Chequeo que el usuario sea de esa empresa
  const usuarioEmpresaDoc = await admin
    .firestore()
    .doc("empresas/usuarios/")
    .withConverter(usuarioConverter)
    .get();

  console.log(usuarioEmpresaDoc);

  console.log(req);
  res.send(200);
});
