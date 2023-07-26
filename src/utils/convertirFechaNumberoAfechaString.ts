export const convertirFechaNumberoAfechaString = (
  fechaNumero: number,
  devolverHora: boolean
) => {
  if (fechaNumero != null) {
    const fecha = new Date(fechaNumero);

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

    const horaNumber = fecha.getHours();
    let hora = "";
    if (horaNumber < 10) {
      hora = "0" + horaNumber;
    } else {
      hora = horaNumber.toString();
    }

    const minutoNumber = fecha.getMinutes();
    let minuto = "";
    if (minutoNumber < 10) {
      minuto = "0" + minutoNumber;
    } else {
      minuto = minutoNumber.toString();
    }
    if (devolverHora) {
      return `${dia}/${mes}/${fecha.getFullYear()} ${hora}:${minuto}`;
    } else {
      return `${dia}/${mes}/${fecha.getFullYear()}`;
    }
  } else {
    return "";
  }
};
