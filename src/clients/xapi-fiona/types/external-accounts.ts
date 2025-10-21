export interface ExternalAuthentication {
  id: string;
  createdOn: string;
  externalIdentification: string;
}

export interface CreateExternalAuthenticationRequest {
  externalIdentification: string;
}

export interface UpdateExternalAuthenticationRequest {
  externalIdentification: string;
}
