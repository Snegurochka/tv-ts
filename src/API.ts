import {
  API_URL,
  API_KEY,
} from './config';

import { Credits, MoviesStateType, MoviType, Photos } from './interfaces/types';
// TMDB API auth deprecated from 1.11
//import { ISessionId, IUserInfoAPIResponse } from './interfaces/APIInterfases';

// TMDB API auth deprecated from 1.11
// const defaultPOSTConfig = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// const defaultDELETEConfig = {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

const API = {
  fetchMovies: async (type: string, searchTerm: string, page: number): Promise<MoviesStateType> => {
    const endpoint = searchTerm
      ? `${API_URL}search/${type}?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${page}`
      : `${API_URL}${type}/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
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
  // TMDB API auth deprecated from 1.11
  // getRequestToken: async () => {
  //   const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
  //   return reqToken.request_token;
  // },
  // fetchUserInfo: async (sessionId: string): Promise<IUserInfoAPIResponse> => {
  //   const userInfo = `${API_URL}account?api_key=${API_KEY}&session_id=${sessionId}`;
  //   return await (await fetch(userInfo)).json();
  // },
  // authenticate: async (
  //   requestToken: string,
  //   username: string,
  //   password: string
  // ): Promise<ISessionId> => {
  //   const bodyData = {
  //     username,
  //     password,
  //     request_token: requestToken
  //   };
  //   // First authenticate the requestToken
  //   await (
  //     await fetch(LOGIN_URL, {
  //       ...defaultPOSTConfig,
  //       body: JSON.stringify(bodyData)
  //     })
  //   ).json();
  //   // Then get the sessionId with the requestToken
  //   const sessionId = await (
  //     await fetch(SESSION_ID_URL, {
  //       ...defaultPOSTConfig,
  //       body: JSON.stringify({ request_token: requestToken })
  //     })
  //   ).json();
  //   return sessionId;
  // },
  // logout: async (sessionId: string): Promise<boolean> => {
  //   const data = await (
  //     await fetch(LOGOUT_URL, {
  //       ...defaultDELETEConfig,
  //       body: JSON.stringify({ session_id: sessionId })
  //     })
  //   ).json();
  //   return data.success;
  // }
};

export default API;
