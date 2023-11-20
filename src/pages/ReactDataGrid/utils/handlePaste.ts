import { PasteEvent } from "react-data-grid";
import { Row } from "../types";

export function handlePaste({
  sourceColumnKey,
  sourceRow,
  targetColumnKey,
  targetRow,
}: PasteEvent<Row>): Row {
  const incompatibleColumns = ['scheduledUntil', 'scheduledFrom', 'type'];
  if (
    ['id'].includes(targetColumnKey) ||
    ((incompatibleColumns.includes(targetColumnKey) ||
      incompatibleColumns.includes(sourceColumnKey)) &&
      sourceColumnKey !== targetColumnKey)
  ) {
    return targetRow;
  }

  return {
    ...targetRow,
    [targetColumnKey]: sourceRow[sourceColumnKey as keyof Row],
  };
}
