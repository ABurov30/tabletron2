import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Column, Row, Table } from '@tanstack/react-table';

interface DatePickerProps {
  getValue: () => string;
  table: Table<any>;
  column: Column<any>;
  row: Row<any>;
}

export function DateCell({ getValue, row, column, table }: DatePickerProps) {
  const date = getValue();
  const { updateData } = table.options.meta as any;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={date ? dayjs(date) : null}
        onChange={(value) => updateData(row.index, column.id, value?.toDate())}
        className="datepicker"
      />
    </LocalizationProvider>
  );
}
