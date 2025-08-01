import { FaFilm, FaCalendar, FaUser } from 'react-icons/fa';
import type { Movie } from '../../types/movie';
import type { Column } from '../../types/table';

export const movieColumns: Column<Movie>[] = [
  {
    key: 'episode_id',
    label: 'Episode',
    sortable: true,
    render: (value: number) => (
      <div className="flex items-center justify-center space-x-2">
        <FaFilm className="text-blue-600" />
        <span className="font-semibold">Episode {value}</span>
      </div>
    ),
  },
  {
    key: 'title',
    label: 'Title',
    sortable: true,
    render: (value: string) => (
      <span className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
        {value}
      </span>
    ),
  },
  {
    key: 'release_date',
    label: 'Release Date',
    sortable: true,
    render: (value: string) => (
      <div className="flex items-center justify-center space-x-2">
        <FaCalendar className="text-gray-400" />
        <span>{new Date(value).toLocaleDateString()}</span>
      </div>
    ),
  },
  {
    key: 'director',
    label: 'Director',
    sortable: true,
    render: (value: string) => (
      <div className="flex items-center justify-center space-x-2">
        <FaUser className="text-gray-400" />
        <span>{value}</span>
      </div>
    ),
  },
  {
    key: 'characters',
    label: 'Characters',
    sortable: false,
    render: (value: string[]) => (
      <span className="text-sm text-gray-500">{value.length} characters</span>
    ),
  },
]; 