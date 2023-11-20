import DateEditor from 'react-tabulator/lib/editors/DateEditor';
import { typesOptions } from './typesOptions';

export const columns = [
  {
    title: 'Select',
    formatter: 'rowSelection',
    titleFormatter: 'rowSelection',
    titleFormatterParams: {
      rowRange: 'active',
    },
    hozAlign: 'center',
  },
  { title: 'Number', field: 'number', hozAlign: 'center', resizable: true },
  {
    title: 'Appointment',
    field: 'code',
    editor: 'input',
    hozAlign: 'center',
  },
  {
    title: 'Scheduled from',
    field: 'scheduledFrom',
    sorter: 'date',
    editor: DateEditor,
    hozAlign: 'center',
    editorParams: { format: 'MM/DD/YYYY' },
  },
  {
    title: 'Scheduled until',
    field: 'scheduledUntil',
    sorter: 'date',
    editor: DateEditor,
    hozAlign: 'center',
    editorParams: { format: 'MM/DD/YYYY' },
  },
  {
    title: 'Warehouse',
    field: 'warehouse.code',
    editor: 'input',
    hozAlign: 'center',
  },
  {
    title: 'Vehicle number',
    field: 'vehicleNumber',
    editor: 'input',
    hozAlign: 'center',
  },
  {
    title: 'Yard location',
    field: 'yardLocation.code',
    editor: 'input',
    hozAlign: 'center',
  },
  {
    title: 'Route',
    field: 'route.code',
    editor: 'input',
    hozAlign: 'center',
  },
  {
    title: 'Current',
    field: 'current',
    resizable: true,
    editor: 'tickCross',
    formatter: 'tickCross',
    hozAlign: 'center',
  },
  {
    title: 'Closed',
    field: 'closed',
    resizable: true,
    editor: 'tickCross',
    formatter: 'tickCross',
    hozAlign: 'center',
  },
  {
    title: 'Type',
    field: 'type',
    hozAlign: 'center',
    editor: 'list',

    editorParams: {
      values: typesOptions,
      verticalNavigation: 'hybrid',
      autocomplete: true,
    },
  },
];
