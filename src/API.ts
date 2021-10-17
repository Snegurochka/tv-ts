import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from './config';

import { Credits, MoviesStateType, MoviType, Photos } from './types';
import { ISessionId, IUserInfoAPIResponse } from './interfaces/APIInterfases';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const API = {
  fetchMovies: async (searchTerm: string, page: number): Promise<MoviesStateType> => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId: string): Promise<MoviType> => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId: string): Promise<Credits> => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchPhotos: async (movieId: string): Promise<Photos> => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/images?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  fetchUserInfo: async (sessionId: string): Promise<IUserInfoAPIResponse> => {
    const userInfo = `${API_URL}account?api_key=${API_KEY}&session_id=${sessionId}`;
    return await (await fetch(userInfo)).json();
  },
  authenticate: async (
    requestToken: string,
    username: string,
    password: string
  ): Promise<ISessionId> => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    // Then get the sessionId with the requestToken
    const sessionId = await (
      await fetch(SESSION_ID_URL, {
        ...defaultConfig,
        body: JSON.stringify({ request_token: requestToken })
      })
    ).json();
    return sessionId;
  }
};

export default API;
