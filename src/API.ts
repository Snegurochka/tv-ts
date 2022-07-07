import {
  API_URL,
  API_KEY,
} from './config';
import { IMoviesAPI } from './interfaces/APIInterfases';

import { Credits, MovieType, Photos } from './interfaces/types';

const API = {
  fetchMovies: async (type: string, searchTerm: string, page: number): Promise<IMoviesAPI> => {
    const endpoint = searchTerm
      ? `${API_URL}search/${type}?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${page}`
      : `${API_URL}${type}/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId: string): Promise<MovieType> => {
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
};

export default API;
