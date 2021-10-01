import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
} from './config';

import { Credits, MoviesStateType, MoviType, Photos } from './types';

const API = {
  fetchMovies: async (searchTerm: string, page: number): Promise<MoviesStateType> => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId:string):Promise<MoviType> => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId:string): Promise<Credits> => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchPhotos: async (movieId:string): Promise<Photos> => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/images?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
};

export default API;
