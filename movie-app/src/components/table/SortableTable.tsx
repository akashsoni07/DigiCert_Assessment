import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import type { Column, SortableTableProps } from '../../types/table';

function SortableTable<T extends Record<string, any>>({
  data,
  columns,
  sortField,
  sortDirection,
  onSort,
  onRowClick,
  loading = false,
  emptyMessage = 'No data available',
}: SortableTableProps<T>) {
  const getSortIcon = (columnKey: keyof T) => {
    if (sortField !== columnKey) {
      return <FaSort className="text-gray-400" />;
    }
    return sortDirection === 'asc' ? (
      <FaSortUp className="text-blue-600" />
    ) : (
      <FaSortDown className="text-blue-600" />
    );
  };

  const handleSort = (column: Column<T>) => {
    if (column.sortable !== false) {
      onSort(column.key);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200 ${
                  column.sortable !== false
                    ? 'cursor-pointer hover:bg-gray-100 transition-colors'
                    : ''
                }`}
                onClick={() => handleSort(column)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>{column.label}</span>
                  {column.sortable !== false && getSortIcon(column.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                onRowClick
                  ? 'cursor-pointer hover:bg-blue-50 transition-colors'
                  : 'hover:bg-gray-50 transition-colors'
              }`}
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center align-middle border-b border-gray-100"
                >
                  <div className="flex items-center justify-center">
                    {column.render
                      ? column.render(item[column.key], item)
                      : String(item[column.key] || '')}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortableTable; 