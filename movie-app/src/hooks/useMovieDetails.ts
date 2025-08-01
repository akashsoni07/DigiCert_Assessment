import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { fetchMovieDetails, clearSelectedMovie } from '../store/movieSlice';
import { moviesApi } from '../services/api';
import type { Character, Planet } from '../types/movie';

interface UseMovieDetailsReturn {
  selectedMovie: any;
  characters: Character[];
  planets: Planet[];
  loading: boolean;
  loadingDetails: boolean;
  error: string | null;
  handleBack: () => void;
}

export const useMovieDetails = (movieId: string | undefined): UseMovieDetailsReturn => {
  const dispatch = useDispatch();
  const { selectedMovie, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  const [characters, setCharacters] = useState<Character[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieDetails(movieId) as any);
    }

    return () => {
      dispatch(clearSelectedMovie());
    };
  }, [dispatch, movieId]);

  useEffect(() => {
    if (selectedMovie) {
      setLoadingDetails(true);
      
      Promise.all([
        moviesApi.getCharacters(selectedMovie.characters.slice(0, 5)),
        moviesApi.getPlanets(selectedMovie.planets.slice(0, 5))
      ])
        .then(([charData, planetData]) => {
          setCharacters(charData);
          setPlanets(planetData);
        })
        .catch((error) => {
          console.error('Error fetching details:', error);
        })
        .finally(() => {
          setLoadingDetails(false);
        });
    }
  }, [selectedMovie]);

  const handleBack = () => {
  };

  return {
    selectedMovie,
    characters,
    planets,
    loading,
    loadingDetails,
    error,
    handleBack
  };
}; 