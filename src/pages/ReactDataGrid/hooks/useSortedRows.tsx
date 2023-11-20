import { useMemo } from 'react';
import { Row } from '../types';
import { SortColumn } from 'react-data-grid';
import { getComparator } from '../utils/getCompator';

interface useSortedRowsProps {
  rows: any;
  sortColumns: readonly SortColumn[];
}

export function useSortedRows({ sortColumns, rows }: useSortedRowsProps) {
  return useMemo((): Row[] => {
    if (sortColumns.length === 0) return rows;

    return [...rows].sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey);
        const compResult = comparator(a, b);
        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [rows, sortColumns]);
}
