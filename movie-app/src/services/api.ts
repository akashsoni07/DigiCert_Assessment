import axios, { type AxiosResponse } from 'axios';
import type { Movie, Character, Planet } from '../types/movie';

const API_BASE_URL = 'https://swapi.info/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 404:
          throw new Error('Resource not found');
        case 429:
          throw new Error('Too many requests. Please try again later.');
        case 500:
          throw new Error('Server error. Please try again later.');
        default:
          throw new Error(data?.detail || `HTTP ${status} error`);
      }
    } else if (error.request) {
      throw new Error('Network error. Please check your connection.');
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
);

export const moviesApi = {
  getAllMovies: async (): Promise<Movie[]> => {
    try {
      const response: AxiosResponse<Movie[]> = await apiClient.get('/films');
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },

  getMovieById: async (id: string): Promise<Movie> => {
    try {
      const response: AxiosResponse<Movie> = await apiClient.get(`/films/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching movie ${id}:`, error);
      throw error;
    }
  },

  getCharacter: async (url: string): Promise<Character> => {
    try {
      const response: AxiosResponse<Character> = await apiClient.get(url.replace(API_BASE_URL, ''));
      return response.data;
    } catch (error) {
      console.error('Error fetching character:', error);
      throw error;
    }
  },

  getPlanet: async (url: string): Promise<Planet> => {
    try {
      const response: AxiosResponse<Planet> = await apiClient.get(url.replace(API_BASE_URL, ''));
      return response.data;
    } catch (error) {
      console.error('Error fetching planet:', error);
      throw error;
    }
  },

  getCharacters: async (urls: string[]): Promise<Character[]> => {
    try {
      const promises = urls.map(url => 
        apiClient.get(url.replace(API_BASE_URL, '')).then(response => response.data)
      );
      return await Promise.all(promises);
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  },

  getPlanets: async (urls: string[]): Promise<Planet[]> => {
    try {
      const promises = urls.map(url => 
        apiClient.get(url.replace(API_BASE_URL, '')).then(response => response.data)
      );
      return await Promise.all(promises);
    } catch (error) {
      console.error('Error fetching planets:', error);
      throw error;
    }
  },
};

export default apiClient; 