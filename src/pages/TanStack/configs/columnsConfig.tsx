import { Cell } from '@tanstack/react-table';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DateCell } from '../ui/DateCell';
import { EditableCell } from '../ui/EditableCell';
import CheckboxMui from '../ui/Checkbox';
import IndeterminateCheckbox from '../ui/IndeterminateCheckbox';
import { IApointment } from '../../../mock/types';
import { ICellArgs, IHeaderArgs } from './types';
const minSize = 190;
const maxSize = 400;
const size = 200;

export const columnsConfig = [
  {
    id: 'select',
    header: ({ table }: IHeaderArgs) => (
      <div className="px-1">
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      </div>
    ),
    cell: ({ row }: ICellArgs) => (
      <div className="px-1">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  },
  {
    accessorKey: 'number',
    header: '№',
    id: '№',
    size: 100,
    cell: <T extends object>(props: Cell<T, never>) => {
      return (
        <>
          {props.row.getCanExpand() ? (
            <div style={{ display: 'flex' }}>
              {props.getValue()}
              {props.row.getIsExpanded() ? (
                <ExpandLessIcon
                  onClick={props.row.getToggleExpandedHandler()}
                />
              ) : (
                <ExpandMoreIcon
                  onClick={props.row.getToggleExpandedHandler()}
                />
              )}
            </div>
          ) : null}
        </>
      );
    },
  },
  {
    accessorKey: 'code',
    header: 'Appointment',
    id: 'code',
    minSize: minSize,
    maxSize: maxSize,
    cell: EditableCell,
  },
  {
    accessorKey: 'scheduledFrom',
    header: 'Scheduled from',
    id: 'scheduledFrom',
    size: size,
    enableResizing: false,
    cell: DateCell,
  },
  {
    accessorKey: 'scheduledUntil',
    header: 'Scheduled until',
    id: 'scheduledUntil',
    size: size,
    enableResizing: false,
    cell: DateCell,
  },
  {
    accessorFn: (row: IApointment) => row.code,
    header: 'Warehouse',
    id: 'warehouse',
    minSize: minSize,
    maxSize: maxSize,
    cell: EditableCell,
  },
  {
    accessorKey: 'vehicleNumber',
    header: 'Vehicle number',
    id: 'vehicleNumber',
    minSize: minSize,
    maxSize: maxSize,
    cell: EditableCell,
  },
  {
    accessorFn: (row: IApointment) => row.code,
    header: 'Yard location',
    id: 'yardLocation',
    minSize: minSize,
    maxSize: maxSize,
    cell: EditableCell,
  },
  {
    accessorFn: (row: IApointment) => row.code,
    header: 'Route',
    id: 'route',
    minSize: minSize,
    maxSize: maxSize,
    cell: EditableCell,
  },
  {
    accessorKey: 'current',
    header: 'Current',
    id: 'current',
    minSize: minSize,
    maxSize: maxSize,
    cell: CheckboxMui,
  },
  {
    accessorKey: 'closed',
    header: 'Closed',
    id: 'closed',
    minSize: minSize,
    maxSize: maxSize,
    cell: CheckboxMui,
  },
  {
    accessorKey: 'type',
    header: 'Type',
    id: 'type',
    minSize: minSize,
    maxSize: maxSize,
  },
];
