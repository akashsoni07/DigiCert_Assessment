import React from 'react';
import type { IconType } from 'react-icons';

interface DetailCardProps {
  icon: IconType;
  label: string;
  value: string | number;
  bgColor?: string;
  iconColor?: string;
  className?: string;
}

const DetailCard: React.FC<DetailCardProps> = ({
  icon: Icon,
  label,
  value,
  bgColor = 'bg-blue-50',
  iconColor = 'text-blue-600',
  className = ''
}) => {
  return (
    <div className={`${bgColor} rounded-lg p-4 ${className}`}>
      <div className="flex items-center space-x-2 mb-2">
        <Icon className={iconColor} />
        <span className="font-semibold text-gray-900">{label}</span>
      </div>
      <p className="text-gray-700">{value}</p>
    </div>
  );
};

export default DetailCard; 