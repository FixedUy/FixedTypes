interface UsuarioApiGoogleSecret {
  id: string;
  access_token: string;
  expiry_date: number;
  scope: string[];
  id_token: string;
  refresh_token: string;
  token_type: string;
}

const usuarioApiGoogleSecretConverter = {
  toFirestore(usuarioApiGoogleSecretConverter: UsuarioApiGoogleSecret) {
    return usuarioApiGoogleSecretConverter;
  },
  fromFirestore(snapshot: any): UsuarioApiGoogleSecret {
    const data = snapshot.data()!;

    return {
      id: snapshot.id,
      access_token: data.access_token,
      expiry_date: data.expiry_date,
      scope: data.scope,
      id_token: data.id_token,
      refresh_token: data.refresh_token,
      token_type: data.token_type
    };
  }
};

export {type UsuarioApiGoogleSecret, usuarioApiGoogleSecretConverter};
