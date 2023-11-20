import { Box } from '@mui/material';
import { Header, Table, ColumnOrderState, Column } from '@tanstack/react-table';
import { useDrag, useDrop } from 'react-dnd';
import SortIcon from '@mui/icons-material/Sort';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import '../TanStack.css';
import { observer } from 'mobx-react-lite';

const reorderColumn = (
  draggedColumnId: string,
  targetColumnId: string,
  columnOrder: string[]
): ColumnOrderState => {
  columnOrder.splice(
    columnOrder.indexOf(targetColumnId),
    0,
    columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0] as string
  );
  return [...columnOrder];
};

interface DraggableColumnHeaderProps<T> {
  table: Table<T>;
  header: Header<T, unknown>;
}

export const DraggableColumnHeader = observer(
  <T extends object>({ header, table }: DraggableColumnHeaderProps<T>) => {
    const { getState, setColumnOrder } = table;
    const { columnOrder } = getState();
    const { column } = header;

    const [, dropRef] = useDrop({
      accept: 'column',
      drop: (draggedColumn: Column<any>) => {
        const newColumnOrder = reorderColumn(
          draggedColumn.id,
          column.id,
          columnOrder
        );
        setColumnOrder(newColumnOrder);
      },
    });

    const [{ isDragging }, dragRef, previewRef] = useDrag({
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      item: () => column,
      type: 'column',
    });

    return (
      <Box
        className={'thTS'}
        width={header.getSize()}
        key={header.id}
        ref={dropRef}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <div ref={previewRef}>{header.column.columnDef.header as string}</div>
        <button
          className={'buttonTS'}
          onClick={header.column.getToggleSortingHandler()}
        >
          {header.column.getIsSorted() ? (
            header.column.getIsSorted() ? (
              <ArrowUpwardIcon />
            ) : (
              <ArrowDownwardIcon />
            )
          ) : (
            <SortIcon />
          )}
        </button>
        <button ref={dragRef} className={'buttonTS'}>
          <DragHandleIcon />
        </button>
        <Box
          className={'resizerTS'}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
        />
      </Box>
    );
  }
);
