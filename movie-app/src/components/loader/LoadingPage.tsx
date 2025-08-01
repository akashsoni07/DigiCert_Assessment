import React from 'react';
import { FaStar } from 'react-icons/fa';

interface LoadingPageProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading the galaxy...", 
  size = 'large' 
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <div className="relative">
            <div className={`${sizeClasses[size]} mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse`}>
              <FaStar className="text-white text-2xl" />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className={`${textSizes[size]} font-semibold text-gray-900 mb-2`}>
            {message}
          </h2>
          <p className="text-sm text-gray-600">
            May the Force be with you...
          </p>
        </div>

        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage; 