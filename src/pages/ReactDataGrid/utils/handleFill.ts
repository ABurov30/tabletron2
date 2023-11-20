import { FillEvent } from 'react-data-grid';
import { Row } from '../types';

export function handleFill({
  columnKey,
  sourceRow,
  targetRow,
}: FillEvent<Row>): Row {
  return { ...targetRow, [columnKey]: sourceRow[columnKey as keyof Row] };
}
