import React from 'react';
import type { IconType } from 'react-icons';

interface StatCardProps {
  icon: IconType;
  label: string;
  value: number;
  iconColor?: string;
  valueColor?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  iconColor = 'text-blue-600',
  valueColor = 'text-blue-600',
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 text-center ${className}`}>
      <div className="flex items-center justify-center space-x-2 mb-2">
        <Icon className={iconColor} />
        <span className="text-lg font-semibold text-gray-900">{label}</span>
      </div>
      <div className={`text-3xl font-bold ${valueColor}`}>
        {value.toLocaleString()}
      </div>
    </div>
  );
};

export default StatCard; 