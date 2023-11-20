import { Column, SelectColumn, textEditor } from 'react-data-grid';
import { Row } from '../types';

export const columns: readonly Column<Row>[] = [
  SelectColumn,
  {
    key: 'code',
    name: 'Appointment',
    resizable: true,
    width: 100,
    draggable: true,
    renderEditCell: textEditor,
  },
  {
    key: 'scheduledFrom',
    name: 'Scheduled from',
    resizable: true,
    draggable: true,
    width: 100,
    renderEditCell: textEditor,
  },
  {
    key: 'scheduledUntil',
    name: 'Scheduled until',
    width: 100,
    resizable: true,
    renderEditCell: textEditor,
  },
  {
    key: 'warehouse',
    name: 'Warehouse',
    width: 100,
    resizable: true,
    draggable: true,
    renderCell: (grid) => <span>{grid.row.warehouse.code}</span>,
    renderEditCell: () => <input type="text" />,
  },
  {
    key: 'vehicleNumber',
    name: 'Vehicle number',
    resizable: true,
    width: 100,
    draggable: true,
    renderEditCell: textEditor,
  },
  {
    key: 'yardLocation',
    name: 'Yard location',
    resizable: true,
    draggable: true,
    width: 100,
    renderCell: (grid) => <span>{grid.row.yardLocation.code}</span>,
    renderEditCell: () => <input type="text" />,
  },
  {
    key: 'route',
    name: 'Route',
    width: 100,
    resizable: true,
    draggable: true,
    renderCell: (grid) => <span>{grid.row.route.code}</span>,
    renderEditCell: () => <input type="text" />,
  },
  {
    key: 'current',
    name: 'Current',
    width: 100,
    resizable: true,
    draggable: true,
    renderCell: (grid) => <input type="checkbox" checked={grid.row.current} />,
    renderEditCell: (grid) => (
      <input type="checkbox" checked={grid.row.current} />
    ),
  },
  {
    key: 'closed',
    name: 'Closed',
    width: 100,
    resizable: true,
    draggable: true,
    renderCell: (grid) => <input type="checkbox" checked={grid.row.closed} />,
    renderEditCell: (grid) => (
      <input type="checkbox" checked={grid.row.closed} />
    ),
  },
];
