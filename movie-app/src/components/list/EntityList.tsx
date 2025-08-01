import React from 'react';
import type { IconType } from 'react-icons';
import LoadingSpinner from '../loader/LoadingSpinner';

interface EntityListProps<T> {
  title: string;
  icon: IconType;
  items: T[];
  loading: boolean;
  renderItem: (item: T, index: number) => React.ReactNode;
  iconColor?: string;
  emptyMessage?: string;
  className?: string;
}

function EntityList<T>({
  title,
  icon: Icon,
  items,
  loading,
  renderItem,
  iconColor = 'text-blue-600',
  emptyMessage = 'No items found',
  className = ''
}: EntityListProps<T>) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 mb-8 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Icon className={iconColor} />
        <h2 className="text-2xl font-semibold text-gray-900">
          {title} ({items.length})
        </h2>
      </div>
      
      {loading ? (
        <LoadingSpinner size="small" message={`Loading ${title.toLowerCase()}...`} />
      ) : items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => renderItem(item, index))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          {emptyMessage}
        </div>
      )}
    </div>
  );
}

export default EntityList; 