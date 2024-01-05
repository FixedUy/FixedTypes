interface MecanismosEnvioMails {
  id: string;
  mail: string;
  userId: string;
  mecanismo: "google" | "smtp";
}

const mecanismosEnvioMailsConverter = {
  toFirestore(mecanismo: MecanismosEnvioMails) {
    return mecanismo;
  },
  fromFirestore(snapshot: any): MecanismosEnvioMails {
    const data = snapshot.data()!;

    return {
      id: snapshot.id,
      mail: data.mail,
      userId: data.userId,
      mecanismo: data.mecanismo
    };
  }
};

export {type MecanismosEnvioMails, mecanismosEnvioMailsConverter};
