import React from 'react';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  title?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  onRetry, 
  title = "Error Loading Content" 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="mb-4">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <FaExclamationTriangle className="w-8 h-8 text-red-600" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mx-auto"
          >
            <FaRedo />
            <span>Try Again</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
