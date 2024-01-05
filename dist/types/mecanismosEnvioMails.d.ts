interface MecanismosEnvioMails {
    id: string;
    mail: string;
    userId: string;
    mecanismo: "google" | "smtp";
}
declare const mecanismosEnvioMailsConverter: {
    toFirestore(mecanismo: MecanismosEnvioMails): MecanismosEnvioMails;
    fromFirestore(snapshot: any): MecanismosEnvioMails;
};
export { type MecanismosEnvioMails, mecanismosEnvioMailsConverter };
