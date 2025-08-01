import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store/store';
import { fetchMovies, setSort, sortMovies } from '../store/movieSlice';
import SortableTable from '../components/table/SortableTable';
import LoadingPage from '../components/loader/LoadingPage';
import type { Movie } from '../types/movie';
import { movieColumns } from '../components/common/movieColumns';
import ErrorMessage from '../components/error/ErrorMessage';

const MovieList: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies, loading, error, sortField, sortDirection } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies() as any);
  }, [dispatch]);

  const handleSort = (field: keyof Movie) => {
    const newDirection = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    dispatch(setSort({ field, direction: newDirection }));
    dispatch(sortMovies())
  };

  const handleRowClick = (movie: Movie) => {
    const movieId = movie.url.split('/').filter(Boolean).pop();
    navigate(`/movie/${movieId}`);
  };

  if (loading && movies.length === 0) {
    return (
      <LoadingPage message="Loading Star Wars movies..." />
    );
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => dispatch(fetchMovies() as any)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to the Galaxy
          </h1>
          <p className="text-lg text-gray-600">
            Explore the epic saga of the Star Wars universe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">{movies.length}</div>
            <div className="text-gray-600">Total Movies</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-green-600">
              {movies.reduce((acc: number, movie: any) => acc + movie.characters.length, 0)}
            </div>
            <div className="text-gray-600">Total Characters</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {movies.reduce((acc: number, movie: any) => acc + movie.planets.length, 0)}
            </div>
            <div className="text-gray-600">Total Planets</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Movie Collection
            </h2>
            <p className="text-gray-600">
              Click on any movie to view detailed information
            </p>
          </div>
          
          <SortableTable
            data={movies}
            columns={movieColumns}
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
            onRowClick={handleRowClick}
            loading={loading}
            emptyMessage="No movies found"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList; 