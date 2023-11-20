import { useEffect } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  ColumnOrderState,
  SortingState,
  ColumnDef,
  Row,
  ExpandedState,
} from '@tanstack/react-table';
import { Box } from '@mui/material';
import { useState } from 'react';

import { DraggableColumnHeader } from './DraggableColumnHeader';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useSkipper } from '../hooks/useSkipper';
import defaultColumn from './defaultColumn';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import { IApointment } from '../../../mock/types';

interface TableProps<T> {
  dataFromStore: Row<T>[];
  columnsConfig: () => ColumnDef<Row<T>, unknown>[];
  setData: (value: any) => void;
}

const NewBaseTable = observer(
  <T extends object>({
    dataFromStore,
    columnsConfig,
    setData,
  }: TableProps<T>) => {
    //@ts-ignore
    const [columns, setColumns] = useState(() => [...columnsConfig]);
    const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
      columns.map((column: ColumnDef<Row<IApointment>>) => column.id as string)
    );
    const [rowSelection, setRowSelection] = useState({});
    const [sorting, setSorting] = useState<SortingState>([]);
    const [expanded, setExpanded] = useState<ExpandedState>({});

    const [autoResetPageIndex, _] = useSkipper();

    useEffect(() => {
      //@ts-ignore
      setColumns([...columnsConfig]);
    }, [rowSelection]);

    const table = useReactTable({
      data: dataFromStore,
      columns,
      defaultColumn,
      columnResizeMode: 'onChange',
      state: {
        columnOrder,
        sorting,
        expanded,
        rowSelection,
      },
      autoResetPageIndex,
      enableRowSelection: true,
      onRowSelectionChange: setRowSelection,
      onColumnOrderChange: setColumnOrder,
      onExpandedChange: setExpanded,
      onSortingChange: setSorting,
      //@ts-ignore
      getSubRows: (row: Row<T>) => row?._children,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
      meta: {
        updateData: (rowIndex: number, columnId: string, value: any) => {
          setData(() => {
            return [...toJS(dataFromStore)].map((row, index) => {
              if (index === rowIndex) {
                return {
                  ...toJS(dataFromStore)[rowIndex]!,
                  [columnId]: value,
                };
              }
              return row;
            });
          });
        },
      },
    });
    return (
      <>
        <div className="tableContainerTS">
          <Box className={'tableTS'} width={table.getTotalSize()}>
            {table.getHeaderGroups().map((headerGroup) => (
              <Box className={'trTS'} key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <DraggableColumnHeader
                    key={header.id}
                    header={header}
                    table={table}
                    //@ts-ignore
                    width={table.getTotalSize()}
                  />
                ))}
              </Box>
            ))}
            {table.getRowModel().rows.map((row) => (
              <Box className={'trTS'} key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Box
                    className={'tdTS'}
                    key={cell.id}
                    width={cell.column.getSize()}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </div>
        <div>
          <Box>
            <Box className={'trTS'}>
              <Box className={'tdTS'} width={1200}>
                <IndeterminateCheckbox
                  {...{
                    checked: table.getIsAllPageRowsSelected(),
                    indeterminate: table.getIsSomePageRowsSelected(),
                    onChange: table.getToggleAllPageRowsSelectedHandler(),
                  }}
                />
                <p>Choose all</p>
              </Box>
            </Box>
          </Box>
          <button
            className={'buttonFooterTS'}
            onClick={() => table.setPageIndex(0)}
          >
            First page
          </button>
          <button
            className={'buttonFooterTS'}
            onClick={() => table.previousPage()}
          >
            Previous page
          </button>
          <button className={'buttonFooterTS'} onClick={() => table.nextPage()}>
            Next page
          </button>
          <button
            className={'buttonFooterTS'}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            Last page
          </button>
        </div>
      </>
    );
  }
);

export default NewBaseTable;
