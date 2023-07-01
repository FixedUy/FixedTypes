/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
class UsuarioSistemaInvitacion {
  id: string;
  mail: string;
  nombre: string;
  vendedor: boolean;
  enviadaPorNombre: string;
  enviadaPorMail: string;
  enviadaEl: number | null;
  enviadaElString: string;

  constructor(
    id: string,
    mail: string,
    nombre: string,
    vendedor: boolean,
    enviadaPorNombre: string,
    enviadaPorMail: string,
    fechaTimestamp: number | null
  ) {
    this.id = id;
    this.mail = mail;
    this.nombre = nombre;
    this.vendedor = vendedor;
    this.enviadaPorNombre = enviadaPorNombre;
    this.enviadaPorMail = enviadaPorMail;

    if (fechaTimestamp != null) {
      this.enviadaEl = fechaTimestamp;
      const fecha = new Date(fechaTimestamp * 1000);

      const diaNumber = fecha.getDate();
      let dia = "";
      if (diaNumber < 10) {
        dia = "0" + diaNumber;
      } else {
        dia = diaNumber.toString();
      }

      const mesNumber = fecha.getMonth() + 1;
      let mes = "";
      if (mesNumber < 10) {
        mes = "0" + mesNumber;
      } else {
        mes = mesNumber.toString();
      }

      const horaNumber = fecha.getHours() + 1;
      let hora = "";
      if (horaNumber < 10) {
        hora = "0" + horaNumber;
      } else {
        hora = horaNumber.toString();
      }

      const minutoNumber = fecha.getMinutes() + 1;
      let minuto = "";
      if (minutoNumber < 10) {
        minuto = "0" + minutoNumber;
      } else {
        minuto = minutoNumber.toString();
      }
      // eslint-disable-next-line max-len
      this.enviadaElString = `${dia}/${mes}/${fecha.getFullYear()} ${hora}:${minuto}`;
    } else {
      this.enviadaEl = null;
      this.enviadaElString = "";
    }
  }
}

const usuarioSistemaInvitacionConverter = {
  toFirestore(Usuario: UsuarioSistemaInvitacion) {
    return {nombre: Usuario.nombre};
  },
  fromFirestore(snapshot: any): UsuarioSistemaInvitacion {
    const data = snapshot.data()!;
    return new UsuarioSistemaInvitacion(
      snapshot.id,
      data.mail,
      data.nombre,
      data.vendedor,
      data.enviadaPorNombre,
      data.enviadaPorMail,
      data.enviadaEl?.seconds
    );
  }
};

export {UsuarioSistemaInvitacion, usuarioSistemaInvitacionConverter};
