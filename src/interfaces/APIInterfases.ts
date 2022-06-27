export interface ISessionId {
    session_id: string
}

export interface IUserInfoAPIResponse {
    avatar: {
        gravatar: {
          hash: string
        }
      },
}

export interface AdditionalUserInformation {
  displayName?: string;
};