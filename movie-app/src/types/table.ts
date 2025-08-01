import React from 'react';

export interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, item: T) => React.ReactNode;
}

export interface SortableTableProps<T> {
  data: T[];
  columns: Column<T>[];
  sortField: keyof T | null;
  sortDirection: 'asc' | 'desc';
  onSort: (field: keyof T) => void;
  onRowClick?: (item: T) => void;
  loading?: boolean;
  emptyMessage?: string;
} 