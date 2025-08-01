import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit"
import type { MovieState, Movie } from '../types/movie';
import { moviesApi } from '../services/api';

const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  loading: false,
  error: null,
  sortField: null,
  sortDirection: 'asc',
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const movies = await moviesApi.getAllMovies();
      return movies;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch movies');
    }
  }
);

export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async (movieId: string, { rejectWithValue }) => {
    try {
      const movie = await moviesApi.getMovieById(movieId);
      return movie;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch movie details');
    }
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },

    setSort: (state, action: PayloadAction<{ field: keyof Movie; direction: 'asc' | 'desc' }>) => {
      state.sortField = action.payload.field;
      state.sortDirection = action.payload.direction;
    },

    clearError: (state) => {
      state.error = null;
    },

    sortMovies: (state) => {
      if (state.sortField) {
        state.movies.sort((a, b) => {
          const aValue = a[state.sortField!];
          const bValue = b[state.sortField!];

          if (typeof aValue === 'string' && typeof bValue === 'string') {
            const comparison = aValue.localeCompare(bValue);
            return state.sortDirection === 'asc' ? comparison : -comparison;
          }

          if (typeof aValue === 'number' && typeof bValue === 'number') {
            const comparison = aValue - bValue;
            return state.sortDirection === 'asc' ? comparison : -comparison;
          }

          return 0;
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
        if (state.sortField) {
          state.movies.sort((a, b) => {
            const aValue = a[state.sortField!];
            const bValue = b[state.sortField!];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
              const comparison = aValue.localeCompare(bValue);
              return state.sortDirection === 'asc' ? comparison : -comparison;
            }

            if (typeof aValue === 'number' && typeof bValue === 'number') {
              const comparison = aValue - bValue;
              return state.sortDirection === 'asc' ? comparison : -comparison;
            }

            return 0;
          });
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedMovie, setSort, clearError, sortMovies } = movieSlice.actions;
export default movieSlice.reducer; 