import { useState } from 'react';
import './ReactDataGrid.css';
import DataGrid, { SortColumn } from 'react-data-grid';
import { rowKeyGetter } from './utils/rowKeyGetter';
import { handleFill } from './utils/handleFill';
import { handleCopy } from './utils/handleCopy';
import { handlePaste } from './utils/handlePaste';
import { columns } from './configs/columnsConfig';
import { useSortedRows } from './hooks/useSortedRows';
import appointment from '../../store/appointment';

export default function ReactDataGrid() {
  const { data } = appointment;
  const [rows, setRows] = useState(data);
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [selectedRows, setSelectedRows] = useState(
    (): ReadonlySet<string> => new Set()
  );

  const sortedRows = useSortedRows({ rows, sortColumns });

  return (
    <>
      <h1>ReactDataGrid</h1>
      <DataGrid
        columns={columns}
        rows={sortedRows}
        defaultColumnOptions={{
          sortable: true,
          resizable: true,
        }}
        sortColumns={sortColumns}
        onSortColumnsChange={setSortColumns}
        rowKeyGetter={rowKeyGetter}
        onRowsChange={setRows as never}
        onFill={handleFill}
        onCopy={handleCopy}
        onPaste={handlePaste}
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
        className="fill-grid"
        style={{ resize: 'both' }}
        onCellClick={(args, event) => {
          if (args.column.key === 'code') {
            event.preventGridDefault();
            args.selectCell(true);
          }
        }}
      />
    </>
  );
}
