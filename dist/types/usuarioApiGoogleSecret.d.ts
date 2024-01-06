interface UsuarioApiGoogleSecret {
    id: string;
    access_token: string;
    expiry_date: number;
    scope: string[];
    id_token: string;
    refresh_token: string;
    token_type: string;
}
declare const usuarioApiGoogleSecretConverter: {
    toFirestore(usuarioApiGoogleSecretConverter: UsuarioApiGoogleSecret): UsuarioApiGoogleSecret;
    fromFirestore(snapshot: any): UsuarioApiGoogleSecret;
};
export { type UsuarioApiGoogleSecret, usuarioApiGoogleSecretConverter };
