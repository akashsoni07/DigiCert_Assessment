import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaFilm, FaStar } from 'react-icons/fa';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const isMovieDetailPage = location.pathname.startsWith('/movie/');

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleGoHome}
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <FaStar className="text-blue-900 text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Star Wars Movies</h1>
              <p className="text-xs text-blue-200">Explore the Galaxy</p>
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            <button
              onClick={handleGoHome}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors cursor-pointer ${
                isHomePage 
                  ? 'bg-blue-700 text-white' 
                  : 'text-blue-200 hover:bg-blue-800 hover:text-white'
              }`}
            >
              <FaHome />
              <span>Home</span>
            </button>
            
            {isMovieDetailPage && (
              <div className="flex items-center space-x-2 text-blue-200">
                <FaFilm />
                <span>Movie Details</span>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 