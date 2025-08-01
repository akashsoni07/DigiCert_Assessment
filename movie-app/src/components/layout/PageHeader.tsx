import React from 'react';
import type { IconType } from 'react-icons';
import { FaArrowLeft } from 'react-icons/fa';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: IconType;
  onBack?: () => void;
  backLabel?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  icon: Icon,
  onBack,
  backLabel = 'Back',
  className = ''
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-6 cursor-pointer"
        >
          <FaArrowLeft />
          <span>{backLabel}</span>
        </button>
      )}

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center space-x-4 mb-6">
          {Icon && (
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Icon className="text-white text-2xl" />
            </div>
          )}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
            {subtitle && (
              <p className="text-xl text-gray-600">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 