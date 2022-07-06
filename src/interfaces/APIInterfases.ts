import { MovieType } from "./types";

export interface ISessionId {
    session_id: string
}

export interface IUserAPI {
  createdAt: Date;
  displayName: string;
  email: string;
}

export interface AdditionalUserInformation {
  displayName?: string;
};

export interface IMoviesAPI {
  page: number,
  results: Array<MovieType>,
  total_pages: number,
  total_results: number,
}