import { CopyEvent } from 'react-data-grid';
import { Row } from '../types';

export function handleCopy({
  sourceRow,
  sourceColumnKey,
}: CopyEvent<Row>): void {
  if (window.isSecureContext) {
    navigator.clipboard.writeText(sourceRow[sourceColumnKey as never]);
  }
}
